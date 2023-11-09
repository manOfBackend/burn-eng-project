import {
  Sentence,
  SentencePage,
  SentenceResponse,
  editSentence,
} from "@sayvoca/lib"
import { useMutation } from "@tanstack/react-query"
import React from "react"
import { queryClient } from "./queryClient"
import { Icons } from "@sayvoca/ui/Icons"
import { Row } from "@tanstack/react-table"

interface AdminSentenceEnableHeadderProps {
  row: Row<Sentence>
}

export default function AdminSentenceEnableHeadder({
  row,
}: AdminSentenceEnableHeadderProps) {
  const { mutate: submitEdit } = useMutation({
    mutationKey: ["editSentence"],
    mutationFn: editSentence,
    onSuccess: () => {
      queryClient.setQueryData(["sentence"], (old: SentencePage) => {
        old.content = old?.content?.map((sentence) => {
          if (sentence.id === row.getValue("id")) {
            sentence.enable = !Boolean(row.getValue("enable"))
          }
          return sentence
        })
        return old
      })

      // queryClient.invalidateQueries({ queryKey: ["sentence"] })
    },
  })
  return (
    <div className="flex space-x-2">
      <button
        type="button"
        className="max-w-[700px] truncate font-medium"
        onClick={() => {
          submitEdit({
            id: row.getValue("id") as Sentence["id"],
            enable: !Boolean(row.getValue("enable")),
            language: row.getValue("language") as Sentence["language"],
            level: row.getValue("level") as Sentence["level"],
            sentence: row.getValue("sentence") as Sentence["sentence"],
          })
        }}
      >
        {Boolean(row.getValue("enable")) ? (
          <Icons.checkCircled />
        ) : (
          <Icons.circle />
        )}
      </button>
    </div>
  )
}
