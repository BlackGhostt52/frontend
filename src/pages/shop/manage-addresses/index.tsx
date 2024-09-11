import { Button } from "@/components/ui/button";
import { NotePencil, PhoneCall, Plus, Trash } from "@phosphor-icons/react";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
  

export const ManageAddresses: React.FC = function() {
    return ( 
        <>
            <Helmet title="Gerenciar Endereços"/>
            <div className="w-full flex flex-col mt-[88px]">
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="text-background w-[320px]">
                        <Plus weight="bold" size={20} className="text-background mr-2"/>
                        Adicionar novo endereço
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Adicionar novo endereço</DialogTitle>
                        <DialogDescription>
                            Preencha os campos do formulário.
                        </DialogDescription>
                    </DialogHeader>
                    <form action="">
                        <div className="">
                            <Label>Estado</Label>
                            <Input className="mt-1"/>
                        </div>
                        <div className="mt-2">
                            <Label>Cidade</Label>
                            <Input className="mt-1"/>
                        </div>
                        <div className="mt-2">
                            <Label>Bairro</Label>
                            <Input className="mt-1"/>
                        </div>
                        <div className="mt-2">
                            <Label>Rua</Label>
                            <Input className="mt-1"/>
                        </div>
                        <div className="mt-2">
                            <Label>Número de telefone</Label>
                            <Input className="mt-1"/>
                        </div>
                        <div className="mt-2">
                            <Label>Ponto de referência</Label>
                            <Input className="mt-1"/>
                        </div>
                        <div className="flex flex-row justify-between gap-8 mt-5">
                            <Button className="w-full bg-secondary text-foreground hover:text-background">Cancelar</Button>
                            <Button className="w-full">Adicionar</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>


            <div className="w-full mt-2">
                {
                    Array.from({ length: 3 }).map((_, index) => {
                        return (
                            <div key={index} className="w-full flex items-center justify-between border-b-2 border-b-zinc-100 py-4">
                                <div className="flex flex-col gap-2">
                                    <strong className="text-2xl">Lorem ipsum</strong>
                                    <p>29874 Lorem ipsum, Avenue akatset 1286</p>
                                    <div className="flex items-center">
                                        <PhoneCall size={20} />
                                        (99) 9999-9999
                                    </div>
                                </div>
                                <div className=" flex flex-col gap-2">
                                    <Button>
                                        <NotePencil weight="regular" size={24} className="mr-2"/>
                                        Editar
                                    </Button>
                                    <Button>
                                        <Trash weight="regular" size={24} className="mr-2"/>
                                        Deletar
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}