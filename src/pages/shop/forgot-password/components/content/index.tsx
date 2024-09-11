import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export const Content: React.FC = function() {
    return (
        <div className="w-[445px] flex flex-col flex-wrap m-auto">
            <h1 className="font-bold text-3xl">Esqueceu a Senha</h1>
            <p className="text-zinc-500 font-normal text-base mt-1">
                Insira seu endereço de e-mail registrado. Nós lhe enviaremos um link no seu e-mail para redefinir sua senha.
            </p>

            <div className="mt-5">
                <label htmlFor="" className="text-base font-medium">E-mail</label>
                <Input id="" name="" className="mt-1"/>
            </div>

            <Button className="mt-6">Enviar</Button>
        </div>
    )
}