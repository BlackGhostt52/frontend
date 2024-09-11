import { StarRating } from "@/components/star-rating"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import React from "react"

export const Testimonies: React.FC = function () {
  return (
    <div className="w-full flex justify-center pt-11 pb-10 items-center bg-zinc-100 mt-24 mb-32">
      <div className="w-[1140px]">
        <header className="flex items-center justify-between">
          <h2 className="w-auto text-3xl font-medium">
            O que nossos consumidores dizem?
          </h2>
          <div className="flex">
            <div className="bg-zinc-200 p-3 rounded-md">
              <ArrowLeft size={24} />
            </div>
            <div className="bg-zinc-200 p-3 ml-2 rounded-md">
              <ArrowRight size={24} />
            </div>
          </div>
        </header>
        <main className="w-[1140px] flex justify-between flex-wrap mt-7">
          <div className="h-[262px] w-[360px] my-3 flex flex-col justify-center rounded-lg bg-zinc-200 p-7">
            <StarRating rating={4} totalStars={5} />
            <p className="text-sm mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              enim, omnis iusto ad placeat animi soluta? Rem expedita beatae est
              illo nam, qui unde alias amet provident, porro, eius similique.
            </p>
            <div className="flex items-center gap-4 mt-3">
              <img
                src=""
                alt=""
                className="bg-zinc-400 rounded-full w-[48px] h-[48px]"
              />
              <div className="flex flex-col">
                <strong>Lorem ipsum</strong>
                <span>Graphic Designer</span>
              </div>
            </div>
          </div>
          <div className="h-[262px] w-[360px] my-3 flex flex-col justify-center rounded-lg bg-zinc-200 p-7">
            <StarRating rating={4} totalStars={5} />
            <p className="text-sm mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              enim, omnis iusto ad placeat animi soluta? Rem expedita beatae est
              illo nam, qui unde alias amet provident, porro, eius similique.
            </p>
            <div className="flex items-center gap-4 mt-3">
              <img
                src=""
                alt=""
                className="bg-zinc-400 rounded-full w-[48px] h-[48px]"
              />
              <div className="flex flex-col">
                <strong>Lorem ipsum</strong>
                <span>Graphic Designer</span>
              </div>
            </div>
          </div>
          <div className="h-[262px] w-[360px] my-3 flex flex-col justify-center rounded-lg bg-zinc-200 p-7">
            <StarRating rating={4} totalStars={5} />
            <p className="text-sm mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              enim, omnis iusto ad placeat animi soluta? Rem expedita beatae est
              illo nam, qui unde alias amet provident, porro, eius similique.
            </p>
            <div className="flex items-center gap-4 mt-3">
              <img
                src=""
                alt=""
                className="bg-zinc-400 rounded-full w-[48px] h-[48px]"
              />
              <div className="flex flex-col">
                <strong>Lorem ipsum</strong>
                <span>Graphic Designer</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
