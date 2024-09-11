import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, House, Note, NotePencil } from "@phosphor-icons/react"
import React, { useState } from "react"
import { AddressCard } from "../address-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export const Content: React.FC = function () {
  const [address, setAddress] = useState(true);
  const [payment, setPayment] = useState(false);
  const [review, setReview] = useState(false);
  const [title, setTitle] = useState("Endereço de entrega");

  function handleAddressState() {
    if (address === false) {
      setTitle("Endereço de entrega");
      setAddress(true)
      setPayment(false)
      setReview(false);
    }
  }

  function handlePaymentState() {
    if (payment === false) {
      setTitle("Método de pagamento");
      setAddress(false)
      setPayment(true)
      setReview(false);
    }
  }

  function handleReviewState() {
    if (review === false) {
      setTitle("Revisar seu pedido");
      setAddress(false)
      setPayment(false)
      setReview(true);
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-zinc-950 font-medium my-[50px]">
        {title}
      </h1>
      <Tabs defaultValue="address" className="w-[700px]">
        <TabsList className="bg-transparent flex flex-row items-center justify-between">
          <TabsTrigger value="address" id="address" className="flex flex-col" onClick={() => handleAddressState()}>
            <div className={ address == true ? "bg-zinc-950 rounded-md text-zinc-100 p-2 mb-3" :
              "rounded-md p-2 mb-3 bg-zinc-200 text-zinc-950"
            }>
              <House size={24} />
            </div>
            Endereço
          </TabsTrigger>
          <Separator className="w-44 bg-transparent border-[1px] border-dashed border-zinc-950"/>
          <TabsTrigger value="payment"  id="payment" className="flex flex-col bg-transparent" onClick={() => handlePaymentState()}>
            <div className={ payment == true ? "bg-zinc-950 rounded-md text-zinc-100 p-2 mb-3" :
              "rounded-md p-2 mb-3 bg-zinc-200 text-zinc-950"
            }>
              <CreditCard size={24} />
            </div>
            Metodo de pagamento
          </TabsTrigger>
          <Separator className="w-44 bg-transparent border-[1px] border-dashed border-zinc-950"/>
          <TabsTrigger value="review"  id="review" className="flex flex-col" onClick={() => handleReviewState()}>
            <div className={ review == true ? "bg-zinc-950 rounded-md text-zinc-100 p-2 mb-3" :
              "rounded-md p-2 mb-3 bg-zinc-200 text-zinc-950"
            }>
              <Note size={24} />
            </div>
            Revisar
          </TabsTrigger>
        </TabsList>
        <TabsContent value="address">
          <div>
            <div>
              <div className="mt-14 mb-5">
                <h2 className="font-bold text-lg text-zinc-950">Selecione o endereço de entrega</h2>
                <p>
                  Selecione o endereço o qual você quer que entreguemos seu pedido, você pode edita-lo, exclui-lo ou adicionar um novo
                </p>
              </div>
              <div className="">
                <AddressCard />
              </div>
            </div>
            <Separator className="w-full mt-9 mb-6"/>
            <div>
              <h2 className="font-bold text-lg mb-4">Adicione um novo endereço</h2>
              <form action="">
                <div className="my-3">
                  <label htmlFor="">Nome</label>
                  <Input className="mt-1"/>
                </div>
                <div className="my-3">
                  <label htmlFor="">Numero de telefone</label>
                  <Input className="mt-1"/>
                </div>
                <div className="my-3">
                  <label htmlFor="">E-mail</label>
                  <Input className="mt-1"/>
                </div>
                <div className="my-3">
                  <label htmlFor="">Estado</label>
                  <Input className="mt-1"/>
                </div>
                <div className="my-3">
                  <label htmlFor="">Cidade</label>
                  <Input className="mt-1"/>
                </div>
                <div className="my-3">
                  <label htmlFor="">Bairro</label>
                  <Input className="mt-1"/>
                </div>
                <div className="my-3">
                  <label htmlFor="">Rua</label>
                  <Input className="mt-1"/>
                </div>
                <Button className="mt-4">Adicionar endereço</Button>
              </form>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="payment">
          <h2 className="font-bold text-lg mt-16">Selecione o método de pagamento</h2>
          <form action="">
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2 mt-10">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Cartão de Credito</Label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Cartão de Débito</Label>
            </div>
          </RadioGroup>
            <div className="my-3">
              <label htmlFor="">Número do cartão</label>
              <Input />
            </div>
            <div className="my-3">
              <label htmlFor="">Nome que tá no cartão</label>
              <Input />
            </div>
            <div className="w-full flex flex-row gap-4">
              <div className="w-full">
                <label htmlFor="">Data de validação</label>
                <Input />
              </div>
              <div className="w-full">
                <label htmlFor="">CVV</label>
                <Input />
              </div>
            </div>
            
            <Button className="my-4">Adicionar ao carrinho</Button>

            <RadioGroup defaultValue="option-one">
              <Separator className="mt-2"/>
              <div className="flex items-center space-x-2 my-3">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Google Pay</Label>
              </div>
              <Separator />
              <div className="flex items-center space-x-2 my-3">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Paypal</Label>
              </div>
              <Separator />
              <div className="flex items-center space-x-2 my-3">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">Boleto</Label>
              </div>
            </RadioGroup>
            <Button className="my-3">Continuar</Button>
          </form>
        </TabsContent>
        <TabsContent value="review">
          <h2 className="font-bold text-xl mt-12">Estimativa de entrega: 22 Dez 2024</h2>
          <div className="">
            <div className="flex flex-row py-5 border-b-[1px] border-b-zinc-200">
              <img src="" alt="" className="w-[70px] h-[70px] bg-zinc-500"/>
              <div className="flex flex-col ml-4">
                <strong className="text-base font-bold">Lorem ipsum dollar</strong>
                <span>R$ 100,00</span>
                <span>Size: M</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-lg">Endereço de entrega</h3>
            <div className="">
              <div className="flex flex-row py-5 border-b-[1px] border-b-zinc-200 justify-between items-center">
                  <div className="flex flex-col">
                    <strong className="text-base font-bold">Lorem ipsum</strong>
                    <span>375856 Lorem inceptum, Dollar amset 1374</span>
                </div>
                <Button className="bg-zinc-100 p-2 text-foreground hover:text-muted">
                  <NotePencil size={24}/>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-lg">Método de pagamento</h3>
            <div className="">
              <div className="flex flex-row py-5 border-b-[1px] border-b-zinc-200 justify-between items-center">
                  <div className="flex flex-col">
                    <strong className="text-base font-bold">Debit Card (.... .... .... ..23)</strong>
                </div>
                <Button className="bg-zinc-100 p-2 text-foreground hover:text-muted">
                  <NotePencil size={24}/>
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
