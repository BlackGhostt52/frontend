import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react"

export const Card: React.FC = function () {
  return (
    <div className="w-[360px] h-[320px] p-5 border mt-10">
      <header className="flex flex-row justify-between border-b-[1px] border-b-zinc-200 pb-4">
        <strong className="">Subtotal</strong>
        <strong className="">R$ 400,00</strong>
      </header>
      <div className="my-4">
        <label htmlFor="">Colocar um cupom de desconto</label>
        <div className="flex">
          <Input className="rounded-none rounded-l-lg" />
          <Button className="rounded-none rounded-r-lg">Aplicar</Button>
        </div>
      </div>
      <div className="flex justify-between border-b-[1px] border-b-zinc-200 pb-3">
        <p>Delivery Charge</p>
        <p>R$ 5,00</p>
      </div>
      <footer>
        <div className="flex flex-row justify-between mt-3">
          <strong className="">Total</strong>
          <strong className="">R$ 420,00</strong>
        </div>
        <Button className="w-full mt-5">Continuar com o checkout</Button>
      </footer>
    </div>
  )
}
