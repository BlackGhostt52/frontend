import { ShoppingCart,
     Trash } from "@phosphor-icons/react";
import React from "react";
import { Helmet } from "react-helmet-async";

export const Wishes: React.FC = function() {
    return (
        <>
          <Helmet title="Lista de Desejos"/>
          <div className="w-full flex flex-row flex-wrap justify-between mt-[88px]">
            {Array.from({ length: 40 }).map((_, index) => {
          return (
            <div key={index} className="w-[262px] mb-3 relative">
              <div className="w-min flex flex-col gap-2 absolute right-1 top-1 bg-zinc-100 p-2 rounded-md">
                <Trash
                  weight="regular"
                  size={24}
                  className="text-zinc-500 hover:transition hover:duration-500 ease-in-out hover:text-zinc-950 hover:cursor-pointer"
                />
                <ShoppingCart
                  weight="regular"
                  size={24}
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
        </div>
        </>
    )
}