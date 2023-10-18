"use client"

import { Sentence } from "@sayvoca/lib/types"
import { Checkbox } from "@sayvoca/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./data-table-column-header"
import { Icons } from "@sayvoca/ui/Icons"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Sentence>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[50px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "enable",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="사용" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[700px] truncate font-medium">
            {Boolean(row.getValue("enable")) ? <Icons.checkCircled /> : <Icons.circle />}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "sentence",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="문장" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[700px] truncate font-medium">
            {row.getValue("sentence")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "language",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="언어" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[700px] truncate font-medium">
            {row.getValue("language")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "level",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="레벨" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[700px] truncate font-medium">
            {row.getValue("level")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="최근수정시간" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[700px] truncate font-medium">
            {row.getValue("updatedAt")}
          </span>
        </div>
      )
    },
  },
  // {
  //   accessorKey: "status",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="상태" />
  //   ),
  //   cell: ({ row }) => {
  //     const status = statuses.find(
  //       (status) => status.value === row.getValue("status")
  //     )

  //     if (!status) {
  //       return null
  //     }

  //     return (
  //       <div className="flex w-[100px] items-center">
  //         {status.icon && (
  //           <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )}
  //         <span>{status.label}</span>
  //       </div>
  //     )
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id))
  //   },
  // },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]


export const statuses = [
  {
    value: "active",
    label: "Active",
    icon: Icons.checkCircled,
  },
  {
    value: "inactive",
    label: "Inactive",
    icon: Icons.circle,
  },
]