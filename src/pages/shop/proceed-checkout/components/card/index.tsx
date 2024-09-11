import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Handbag } from "@phosphor-icons/react"


export const Card: React.FC = function () {
  return (
    <div className="w-[360px] h-[320px] p-5 border mt-28">
      <header className="flex flex-row justify-between border-b-[1px] border-b-zinc-200 pb-4">
        <strong className="">Subtotal</strong>
        <strong className="">R$ 400,00</strong>
      </header>
      <div className="my-4">
        <label htmlFor="">Colocar um cupom de desconto</label>
        <div className="flex mt-2">
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

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full mt-5">Continuar com o checkout</Button>
          </DialogTrigger>
          <DialogContent className="w-[492px]">
            <DialogHeader>
              <div className="m-auto bg-foreground p-5 rounded-full mb-4">
                <Handbag size={24} className="text-muted"/>
              </div>
              <DialogTitle className="font-bold text-lg text-center">Seu pedido foi confirmado!</DialogTitle>
              <DialogDescription className="font-normal text-base text-center">
                Obrigado por comprar! Seu pedido ainda não foi enviado, mas enviaremos um e-mail quando isso for feito!
              </DialogDescription>
            </DialogHeader>
            <Button className="mt-4">Ver pedido</Button>
            <Button className="bg-background border-[1px] border-foreground text-foreground hover:text-muted">Voltar para a página principal</Button>
          </DialogContent>
        </Dialog>
      </footer>
    </div>
  )
}
