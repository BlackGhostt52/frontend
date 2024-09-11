import React from "react"
import { Helmet } from "react-helmet-async"
import { Header } from "@/components/header/index.tsx"
import { Navigation } from "@/components/navigation"
import { Filter } from "./components/filter"
import { Main } from "./components/main"
import { Footer } from "@/components/footer/index.tsx"

export const ProductList: React.FC = function () {
  return (
    <>
      <Helmet title="Pesquisa de Produtos" />
      <div className="w-full h-full flex flex-col items-center">
        <Header />
        <div className="flex flex-row gap-9 mt-14">
          <div className="">
            <Navigation />
            <Filter />
          </div>
          <Main />
        </div>
        <Footer />
      </div>
    </>
  )
}
