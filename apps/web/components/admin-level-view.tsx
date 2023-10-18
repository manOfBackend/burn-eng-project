"use client"

import { getSentencePage, searchSentence } from '@sayvoca/lib/api'
import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@sayvoca/ui'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import React, { useState } from 'react'
import { columns } from './columns'
import { DataTablePagination } from './data-table-pagination'
import { InputSentence, Sentence } from '@/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sentenceInputSchema } from '@sayvoca/lib'
import { Icons } from '@sayvoca/ui/Icons'

const data2: Sentence[] = [{
  id: 0,
  createdAt: '2021-09-01T00:00:00',
  updatedAt: '2021-09-01T00:00:00',
  enable: true,
  sentence: '안녕하세요',
  deletedAt: '2022-09-01T00:00:00',
  language: 'KOREAN',
  level: 3
}, {
  id: 1,
  createdAt: '2021-09-01T00:00:00',
  updatedAt: '2021-09-01T00:00:00',
  enable: true,
  sentence: '안녕하세요',
  deletedAt: '2022-09-01T00:00:00',
  language: 'KOREAN',
  level: 2
}]
export default function AdminLevelView() {

  const [isPending, startTransition] = React.useTransition()


  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])

  const [page, setPage] = React.useState(0)

  // const { status, data: sentences, error } = useQuery({
  //   queryKey: ['sentence', page],
  //   queryFn: () => getSentencePage({ page, size: 20 })
  // })

  const table = useReactTable({
    data: data2,
    columns,
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
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

  const form = useForm<InputSentence>({
    resolver: zodResolver(sentenceInputSchema),
    defaultValues: {
      sentence: '',
    },
  })
  const { mutate } = useMutation({
    mutationKey: ['searchSentence', form.getValues('sentence')],
    mutationFn: searchSentence,
  })


  function onSubmit(data: InputSentence) {
    form.reset()
    startTransition(async () => {
      mutate({
        search: data.sentence
      })
    })
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='flex gap-4 justify-end w-full items-center pb-4'>
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
                  <FormItem className='w-[200px]'>
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
      <div className="rounded-md border mb-5">
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
