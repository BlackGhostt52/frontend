import React from "react"
import { ProductInfo } from "./components/product-info"
import { Helmet } from "react-helmet-async"
import { RelatedProduct } from "./components/related-product"
import { Footer } from "@/components/footer/index.tsx"
import { Header } from "@/components/header/index.tsx"

export const Product: React.FC = function () {
  return (
    <>
      <Helmet title="Product Name" />
      <div className="w-full h-full flex flex-wrap justify-center">
        <Header />
        <div className="my-14">
          <ProductInfo />
          <RelatedProduct />
        </div>
        <Footer />
      </div>
    </>
  )
}
