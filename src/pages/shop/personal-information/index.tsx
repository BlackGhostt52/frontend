import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NotePencil } from "@phosphor-icons/react";
import React from "react";
import { Helmet } from "react-helmet-async";

export const PersonalInformation: React.FC = function() {
    return (
        <>
            <Helmet title="Informações pessoas"/>
            <div className="w-full mt-[88px]">
            <div className="flex flex-row justify-between">
                <Avatar className="w-20 h-20 bg-zinc-200">
                    <AvatarImage src="" className=""/>
                    <AvatarFallback>Profile Picture</AvatarFallback>
                </Avatar>
                <Button className="gap-2">
                    <NotePencil size={24} />
                    Editar perfil
                </Button>
            </div>

            <form action="" className="mt-10">
                <div className="w-full flex flex-row gap-4">
                    <div className="w-full">
                        <Label className="text-xs font-regular">Primeiro nome</Label>
                        <Input />
                    </div>
                    <div className="w-full">
                        <Label className="text-xs font-regular">Sobrenome</Label>
                        <Input />
                    </div>
                </div>
                <div className="w-full flex flex-row gap-4 mt-4">
                    <div className="w-full">
                        <Label className="text-xs font-regular">Número de telefone</Label>
                        <Input />
                    </div>
                    <div className="w-full">
                        <Label className="text-xs font-regular">Endereço de email</Label>
                        <Input />
                    </div>
                </div>
                <div className="w-full mt-4">
                    <Label className="text-xs font-regular">Endereço</Label>
                    <Input />
                </div>
            </form>
        </div>
        </>
    )
}