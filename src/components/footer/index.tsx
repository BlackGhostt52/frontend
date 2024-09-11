import { Input } from "@/components/ui/input"
import {
  FacebookLogo,
  InstagramLogo,
  EnvelopeSimple,
  MapPin,
  ArrowRight,
  Phone,
  TwitterLogo,
} from "@phosphor-icons/react"
import React from "react"

export const Footer: React.FC = function () {
  return (
    <div className="w-full h-72 bg-zinc-900 flex flex-col items-center justify-center">
      <div className="w-[1140px] flex justify-between">
        <div className="">
          <nav>
            <strong className="text-3xl text-zinc-100">Logo</strong>
            <ul className="flex flex-col gap-y-4 mt-6">
              <li className="text-sm text-zinc-100 flex gap-4">
                <Phone size={24} weight="regular" className="text-zinc-100" />
                (99) 999 999 999
              </li>
              <li className="text-sm text-zinc-100 flex gap-4">
                <EnvelopeSimple
                  size={24}
                  weight="regular"
                  className="text-zinc-100"
                />
                inceptum@gmail.com
              </li>
              <li className="text-sm text-zinc-100 flex gap-4">
                <MapPin size={24} weight="regular" className="text-zinc-100" />
                Rua Lorem ipsum dollar vero qui
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <nav>
            <strong className="text-sm text-zinc-100 font-bold">
              Informações
            </strong>
            <ul className="flex flex-col gap-y-1 mt-2">
              <li className="text-sm text-zinc-100">Minha conta</li>
              <li className="text-sm text-zinc-100">Login</li>
              <li className="text-sm text-zinc-100">Meu carrinho</li>
              <li className="text-sm text-zinc-100">Lista de desejos</li>
              <li className="text-sm text-zinc-100">Checkout</li>
            </ul>
          </nav>
        </div>
        <div className="">
          <nav>
            <strong className="text-sm text-zinc-100 font-bold">
              Serviços
            </strong>
            <ul className="flex flex-col gap-y-1 mt-2">
              <li className="text-sm text-zinc-100">Sobre Nós</li>
              <li className="text-sm text-zinc-100">Carreiras</li>
              <li className="text-sm text-zinc-100">Informação de entrega</li>
              <li className="text-sm text-zinc-100">Política de Privacidade</li>
              <li className="text-sm text-zinc-100">Termos & Condições</li>
            </ul>
          </nav>
        </div>
        <div className="">
          <strong className="text-sm text-zinc-100 font-bold">
            Inscreva-se
          </strong>
          <p className="w-[310px] text-sm text-zinc-100 mt-3 mb-[23px]">
            Lorem ipsum dolor, sit amet consectetur. Nisi, voluptas provident
            vero qui quisquam !
          </p>
          <div className="flex items-center border-2 border-zinc-100 rounded-lg py-1 px-3">
            <EnvelopeSimple
              size={32}
              weight="regular"
              className="text-zinc-100"
            />
            <Input
              className="bg-transparent p-0 pl-1 border-transparent text-zinc-100 placeholder:text-zinc-400"
              placeholder="email@exemplo.com"
            />
            <ArrowRight size={24} weight="regular" className="text-zinc-100" />
          </div>
        </div>
      </div>
      <div className="w-[1140px] pt-3 mt-11 flex items-center justify-between border-t-[1px] border-zinc-100">
        <div className="flex flex-row gap-2">
          <img src="" alt="" className="w-[38px]" />
          <img src="" alt="" className="w-[38px]" />
          <img src="" alt="" className="w-[38px]" />
          <img src="" alt="" className="w-[38px]" />
          <img src="" alt="" className="w-[38px]" />
        </div>
        <div className="text-zinc-100">
          &#9400;2024 Projeto Integrador | Fatec - Todos os direitos reservados
        </div>
        <div className="flex flex-row gap-3">
          <FacebookLogo size={24} weight="regular" className="text-zinc-100" />
          <InstagramLogo size={24} weight="regular" className="text-zinc-100" />
          <TwitterLogo size={24} weight="regular" className="text-zinc-100" />
        </div>
      </div>
    </div>
  )
}
