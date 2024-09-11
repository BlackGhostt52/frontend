import { Footer } from "@/components/footer/index.tsx"
import { Header } from "@/components/header/index.tsx"
import React from "react"
import { Content } from "./components/content"
import { Card } from "./components/card"
import { Helmet } from "react-helmet-async"

export const ProceedCheckout: React.FC = function () {
  return (
    <>
      <Helmet title="Prosseguir com o Checkout"/>
      <div className="w-full h-full flex flex-col items-center">
      <Header />
      <div className="flex w-[1140px] flex-row items-stretch gap-20 mb-20">
        <Content />
        <Card />
      </div>
      <Footer />
    </div>
    </>
  )
}
