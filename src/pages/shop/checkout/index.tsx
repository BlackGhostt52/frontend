import { Footer } from "@/components/footer/index.tsx"
import { Header } from "@/components/header/index.tsx"
import React from "react"
import { Content } from "./components/content"
import { Card } from "./components/card"
import { Helmet } from "react-helmet-async"

export const Checkout: React.FC = function () {
  return (
    <>
      <Helmet title="Checkout" />
      <div className="w-full h-full flex flex-col items-center">
        <Header />
        <h1 className="w-[1140px] text-3xl text-zinc-950 font-medium my-[50px]">
          Checkout de compras
        </h1>
        <div className="flex flex-row items-stretch gap-20 mb-20">
          <Content />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  )
}
