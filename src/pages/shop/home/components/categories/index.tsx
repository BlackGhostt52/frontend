import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import React from "react"

export const Categories: React.FC = function () {
  return (
    <div className="w-[1140px] mt-20">
      <header className="flex items-center justify-between">
        <h2 className="w-96 text-3xl font-medium">Compre por categoria</h2>
        <div className="flex">
          <div className="bg-zinc-200 p-3 rounded-md">
            <ArrowLeft size={24} />
          </div>
          <div className="bg-zinc-200 p-3 ml-2 rounded-md">
            <ArrowRight size={24} />
          </div>
        </div>
      </header>
      <main className="w-[1140px] flex justify-between flex-wrap mt-4">
        <div className="w-[262px] h-[360px] my-3 bg-zinc-400"></div>
        <div className="w-[262px] h-[360px] my-3 bg-zinc-400"></div>
        <div className="w-[262px] h-[360px] my-3 bg-zinc-400"></div>
        <div className="w-[262px] h-[360px] my-3 bg-zinc-400"></div>
      </main>
    </div>
  )
}
