import { Increment } from "@/components/increment"
import { Trash } from "@phosphor-icons/react"
import React from "react"

export const Content: React.FC = function () {
  return (
    <>
      <div className="">
        <div className="w-[700px]">
          <table className="w-full">
            <thead>
              <tr className="w-full mb-5 border-b-[1px] border-zinc-200">
                <th className="text-left pb-5">Produto</th>
                <th className="text-left pb-5">Preço</th>
                <th className="text-left pb-5">Quantidade</th>
                <th className="text-left pb-5">Subtotal</th>
                <th className="text-left pb-5"></th>
              </tr>
            </thead>
            <tbody className="">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <tr
                    key={index}
                    className="w-full border-b-[1px] border-zinc-200"
                  >
                    <td className="w-[355px] py-6">
                      <div className="flex items-center">
                        <img
                          src=""
                          alt=""
                          className="w-[70px] h-[70px] bg-zinc-400 mr-[10px]"
                        />
                        <div className="flex flex-col mr-[10px]">
                          <span className="text-base font-bold block">
                            Lorem ipsum dollar amset
                          </span>
                          <span>Size: S</span>
                        </div>
                      </div>
                    </td>
                    <td className="w-[93px] py-6">R$ 100,00</td>
                    <td className="w-[187px] py-6">
                      <Increment />
                    </td>
                    <td className="w-[96px] py-6">R$ 100,00</td>
                    <td>
                      <Trash
                        size={22}
                        className="text-red-500 hover:cursor-pointer"
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="div"></div>
      </div>
    </>
  )
}
