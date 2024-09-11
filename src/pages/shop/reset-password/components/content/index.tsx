import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export const Content: React.FC = function() {
    return (
        <div className="w-[445px] flex flex-col flex-wrap m-auto">
            <h1 className="font-bold text-3xl">Nova Senha</h1>
            <p className="text-zinc-500 font-normal text-base mt-1">
                Insira sua nova senha.
            </p>

            <div className="mt-5">
                <label htmlFor="" className="text-base font-medium">Nova senha</label>
                <Input id="" name="" className="mt-1"/>
            </div>

            <div className="mt-5">
                <label htmlFor="" className="text-base font-medium">Confirmar nova senha</label>
                <Input id="" name="" className="mt-1"/>
            </div>

            <Button className="mt-6">Alterar senha</Button>
        </div>
    )
}