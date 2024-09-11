import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"

import { Checkbox } from "@/components/ui/checkbox";

export const Filter: React.FC = function() {
    return (
        <Accordion type="multiple" className="w-[263px] mt-6">
            <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline">Categorias de Produto</AccordionTrigger>
                <AccordionContent>
                    <div className="flex items-center">
                        <Checkbox id="test" className="bg-black"/>
                        <label htmlFor="test" className="ml-3 font-medium">Test</label>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline">Filtrar por preço</AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-col">
                        <span className="mb-4">Preço: $0 - $2000</span>
                        <Slider defaultValue={[0]} max={100} step={1} />
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline">Filtrar por cor</AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <Checkbox id="test1" className="bg-red-500 border-red-500 checked:bg-red-500" />
                            <label htmlFor="test1" className="ml-3 font-medium">Red</label>
                        </div>
                        <div className="flex flex-row">
                            <span className="">(10)</span>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="hover:no-underline">Filtrar por tamanho</AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center">
                            <Checkbox id="test2" className="bg-red-500 border-red-500 text-white" />
                            <label htmlFor="test2" className="ml-3 font-medium">Red</label>
                        </div>
                        <div className="flex flex-row">
                            <span className="">(10)</span>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}