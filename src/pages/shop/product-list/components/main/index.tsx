import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Eye, ShoppingCart, Star } from "@phosphor-icons/react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export const Main: React.FC = function () {
  return (
    <div className="w-[847px] flex flex-col items-center justify-center mt-14">
      <header className="w-full flex flex-row items-center justify-between mb-3">
        <div className="text-sm">Mostrando 1 - 20 de 800 resultados</div>
        <Select>
          <SelectTrigger className="w-[90px] border-none focus:ring-0 focus:outline-none">
            <SelectValue placeholder="Listar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="az">A - Z</SelectItem>
            <SelectItem value="za">Z - A</SelectItem>
          </SelectContent>
        </Select>
      </header>
      <main className="w-full flex flex-wrap justify-between">
        {Array.from({ length: 40 }).map((_, index) => {
          return (
            <div key={index} className="w-[262px] mb-3 relative">
              <div className="w-min flex flex-col gap-2 absolute right-1 top-1 bg-zinc-100 p-2 rounded-md">
                <Star
                  weight="regular"
                  size={24}
                  className="text-zinc-500 hover:transition hover:duration-500 ease-in-out hover:text-zinc-950 hover:cursor-pointer"
                />
                <Eye
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
      </main>
      <div className="float-right">
        <Pagination className="">
          <PaginationContent className="">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
