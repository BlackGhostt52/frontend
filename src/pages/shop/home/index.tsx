import React from "react"
import { Helmet } from "react-helmet-async"
import { Header } from "@/components/header/index.tsx"
import { Categories } from "./components/categories"
import { Bestseller } from "./components/bestseller"
import { Testimonies } from "./components/testimonies"
import { Footer } from "@/components/footer/index.tsx"

export const Home: React.FC = function () {
  return (
    <>
      <Helmet title="Principal" />
      <div className="w-full h-full flex flex-col items-center">
        <Header />
        <Categories />
        <Bestseller />
        <Testimonies />
        <Footer />
      </div>
    </>
  )
}
