import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

export const AddressCard: React.FC = function() {
    const [check, setCheck] = useState(false);

    function handleCheckState() {
        setCheck(!check);
    }

    return (
        <div>
            <div className="h-[171px] relative w-[335px] bg-zinc-100 rounded-lg flex flex-col items-center justify-center">
                <Checkbox id="1" className="absolute right-4 top-4 bg-black border-black" onClick={() => handleCheckState()}/>
                <div className="w-[275px]">
                    <h1 className="text-base font-bold">Lorem Ipsum</h1>
                    <p>4378 Lorem ipsum. Lorem, Ipsum 1284</p>

                    <div className="flex flex-row mt-5 justify-between">
                        <Button className="w-[130px] bg-zinc-200 text-zinc-950">Editar</Button>
                        <Button className="w-[130px] bg-red-100 text-zinc-950">Excluir</Button>
                    </div>
                </div>
            </div>
            {
                check && <Button className="w-[335px] mt-5">Entregar Aqui</Button>
            }
        </div>
    )
}