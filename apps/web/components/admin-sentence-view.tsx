"use client"

import {
  getSentenceLevelCount,
  getSentencePage,
  searchSentence,
} from "@sayvoca/lib/api"
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@sayvoca/ui"
import { useMutation, useQuery } from "@tanstack/react-query"
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import React, { useState, useMemo } from "react"
import { columns } from "./columns"
import { DataTablePagination } from "./data-table-pagination"
import { InputSentence, Sentence, SentencePage } from "@sayvoca/lib/types"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { sentenceInputSchema } from "@sayvoca/lib"
import { Icons } from "@sayvoca/ui/Icons"
import { queryClient } from "./queryClient"

const data2: Sentence[] = [
  {
    id: 0,
    createdAt: "2021-09-01T00:00:00",
    updatedAt: "2021-09-01T00:00:00",
    enable: true,
    sentence: "안녕하세요",
    deletedAt: "2022-09-01T00:00:00",
    language: "KOREAN",
    level: 3,
  },
  {
    id: 1,
    createdAt: "2021-09-01T00:00:00",
    updatedAt: "2021-09-01T00:00:00",
    enable: true,
    sentence: "안녕하세요",
    deletedAt: "2022-09-01T00:00:00",
    language: "KOREAN",
    level: 2,
  },
]
export default function AdminSentenceView() {
  const [isPending, startTransition] = React.useTransition()

  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])

  const [{ pageIndex, pageSize }, setPage] = React.useState<{
    pageIndex: number
    pageSize: number
  }>({
    pageIndex: 0,
    pageSize: 20,
  })

  const form = useForm<InputSentence>({
    resolver: zodResolver(sentenceInputSchema),
    defaultValues: {
      sentence: "",
    },
  })
  const { mutate, data: searched } = useMutation({
    mutationKey: ["searchSentence", form.getValues("sentence")],
    mutationFn: searchSentence,
    onSuccess: (data) => {
      queryClient.setQueriesData(["sentence"], (old: SentencePage) => {
        return { ...old, content: data }
      })
      setPage({
        pageIndex: 0,
        pageSize: 20,
      })
    },
  })

  const {
    status,
    data: sentences,
    error,
  } = useQuery({
    queryKey: ["sentence", pageIndex],
    queryFn: () => getSentencePage({ page: pageIndex, size: pageSize }),
  })

  const { data: sentenceLevelCount } = useQuery({
    queryKey: ["sentence-count"],
    queryFn: () => getSentenceLevelCount(),
  })

  const tableData = useMemo(() => {
    return sentences?.content ?? data2
  }, [sentences?.content])

  const table = useReactTable({
    data: tableData,
    columns,
    pageCount: 100,
    state: {
      sorting,
      pagination: {
        pageIndex,
        pageSize,
      },
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    onPaginationChange: setPage,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  function onSubmit(data: InputSentence) {
    startTransition(async () => {
      mutate({
        search: data.sentence,
      })
    })
  }

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-end gap-4 pb-4">
        <div>
          <Form {...form}>
            <form
              className="flex w-full gap-4"
              onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
            >
              <FormField
                control={form.control}
                name="sentence"
                render={({ field }) => (
                  <FormItem className="w-[200px]">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button disabled={isPending}>
                {isPending && (
                  <Icons.spinner
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                검색
                <span className="sr-only">검색</span>
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="mb-5 rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  문장이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}
