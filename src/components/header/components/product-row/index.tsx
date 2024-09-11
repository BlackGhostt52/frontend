import { Trash } from "@phosphor-icons/react"
import React from "react"

export const ProductRow: React.FC = function () {
  return (
    <div
      className="flex py-7
     border-b-zinc-500 border-b-[1px]"
    >
      <img src="" alt="" className="w-[70px] h-[70px] bg-zinc-400 mr-[10px]" />
      <div className="w-[204px] flex flex-col mr-[10px]">
        <span className="text-base block">Lorem ipsum dollar amset</span>
        <strong>5 x R$100,00</strong>
        <span>Size: S</span>
      </div>
      <Trash size={24} className="text-red-500 mt-auto" />
    </div>
  )
}
