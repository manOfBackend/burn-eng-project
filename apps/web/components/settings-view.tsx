"use client"
import { getUserInfo } from "@sayvoca/lib/api"
import { Icons } from "@sayvoca/ui/Icons"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import React from "react"

export default function SettingsView() {
  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
  })
  return (
    <section className="flex flex-col gap-4">
      <article>
        <a
          target="_blank"
          href="https://forms.gle/eBbfvbxQzo4WUQW88"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center gap-1"
        >
          <Icons.heart className="text-red-600" />
          <span className="text-lg font-bold">피드백 주기</span>
        </a>
      </article>
      <article>
        {user?.role === "ADMIN" && (
          <Link
            href="/admin"
            className="flex cursor-pointer items-center gap-1"
          >
            <Icons.lock color="#9108bf" />
            <span className="text-lg font-bold">관리자 페이지</span>
          </Link>
        )}
      </article>
    </section>
  )
}
