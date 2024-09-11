import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React from "react";
import { Link } from "react-router-dom";

export const Content: React.FC = function() {
    return (
        <div className="w-[445px] flex flex-col flex-wrap m-auto">
            <h1 className="font-bold text-3xl">Bem-vindo</h1>
            <p className="text-zinc-500 font-normal text-base mt-1">Faça login aqui</p>
            <div className="mt-6">
                <label htmlFor="" className="text-base font-medium">E-mail</label>
                <Input id="" name="" />
            </div>
            <div className="mt-3">
                <label htmlFor="" className="text-base font-medium">Senha</label>
                <Input id="" name="" />
            </div>

            <div className="flex justify-between mt-3">
                <div className="flex items-center">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="ml-2">Lembrar-me sempre</label>
                </div>
                <Link to={"#"}>Esqueceu a senha?</Link>
            </div>
            <Button className="mt-6">Entrar</Button>
        </div>
    )
}