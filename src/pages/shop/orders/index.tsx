import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";
import { OrderItem } from "./components/order-item";
import { Helmet } from "react-helmet-async";

export const Orders: React.FC = function() {
    return (
        <>
            <Helmet title="Pedidos"/>
            <div className="w-full flex flex-col mb-28">
            <div className="w-full flex justify-end mb-1">
                <div className="flex flex-row w-[470px] gap-5">
                    <Input placeholder="Pesquisar"/>
                    <Button className="gap-3">
                        <MagnifyingGlass size={20} />
                        Pesquisar
                    </Button>
                </div>
            </div>
            <div className="w-full mt-6">
                {
                    Array.from({ length: 4 }).map((_, index) => {
                        return (
                            <OrderItem key={index}/>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}