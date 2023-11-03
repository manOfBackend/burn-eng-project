"use client"

import { sentenceSchema } from "@sayvoca/lib/validations/word"
import { Button } from "@sayvoca/ui/Button"
import { Icons } from "@sayvoca/ui/Icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@sayvoca/ui/dropdown"
import { Row } from "@tanstack/react-table"
import { statuses } from "./columns"
import { useMutation } from "@tanstack/react-query"
import { Sentence, deleteSentence } from "@sayvoca/lib"
import { queryClient } from "./queryClient"

interface DataTableRowActionsProps {
  row: Row<Sentence>
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const word = sentenceSchema.parse(row.original)

  const { mutate: submitDelete } = useMutation({
    mutationKey: ["deleteSentence"],
    mutationFn: deleteSentence,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sentence"] })
    },
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="data-[state=open]:bg-muted flex h-8 w-8 p-0"
        >
          <Icons.dotsHorizontal className="h-4 w-4" />
          <span className="sr-only">열기</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>상태</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={word.sentence}>
              {statuses.map((label) => (
                <DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => submitDelete(row.getValue("id"))}>
          삭제
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
