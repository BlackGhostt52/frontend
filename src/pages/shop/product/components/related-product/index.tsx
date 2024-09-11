import { Eye, ShoppingCart, Star } from "@phosphor-icons/react"
import React from "react"

export const RelatedProduct: React.FC = function () {
  return (
    <div className="w-[1140px] mt-14">
      <h2 className="font-bold text-3xl mb-11">Produtos Relacionados</h2>
      <main className="w-full flex flex-wrap justify-between">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <div key={index} className="w-[262px] mb-3 relative">
              <div className="w-min flex flex-col gap-2 absolute right-1 top-1 bg-zinc-100 p-2 rounded-md">
                <Star
                  size={24}
                  weight="regular"
                  className="text-zinc-500 hover:transition hover:duration-500 ease-in-out hover:text-zinc-950 hover:cursor-pointer"
                />
                <Eye
                  size={24}
                  weight="regular"
                  className="text-zinc-500 hover:transition hover:duration-500 ease-in-out hover:text-zinc-950 hover:cursor-pointer"
                />
                <ShoppingCart
                  size={24}
                  weight="regular"
                  className="text-zinc-500 hover:transition hover:duration-500 ease-in-out hover:text-zinc-950 hover:cursor-pointer"
                />
              </div>
              <img src="" alt="" className="h-[330px] bg-zinc-400 w-auto" />
              <div className="flex flex-col pt-5">
                <strong className="truncate text-sm text-left">
                  Lorem ipsum
                </strong>
                <p className="truncate text-sm  text-left">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsam omnis animi repudiandae impedit dolorem cupiditate
                  maiores hic alias. Quidem in quos placeat possimus suscipit
                  quia consequatur neque porro voluptatem accusantium.
                </p>
                <span className="text-sm  text-left">R$ 600,00</span>
              </div>
            </div>
          )
        })}
      </main>
    </div>
  )
}
