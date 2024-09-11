import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash } from "@phosphor-icons/react";
import { NotePencil } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Helmet } from "react-helmet-async";

export const SavedCards: React.FC = function() {
    return (
        <>
            <Helmet title="Cartões Salvas"/>
            <div className="w-full flex flex-col mt-[88px]">
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="text-background w-[320px]">
                        <Plus weight="bold" size={20} className="text-background mr-2"/>
                        Adicionar novo cartão
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Adicionar novo cartão</DialogTitle>
                        <DialogDescription>
                            Preencha os campos do formulário.
                        </DialogDescription>
                    </DialogHeader>
                    <form action="">
                        <div className="mt-2">
                            <Label className="text-sm">Número do cartão</Label>
                            <Input className="mt-1"/>
                        </div>
                        <div className="mt-2">
                            <Label className="text-sm">Nome que está no cartão</Label>
                            <Input className="mt-1"/>
                        </div>
                        <div className="mt-2">
                            <Label className="text-sm">Bandeira do cartão</Label>
                            <Input className="mt-1"/>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="mt-2 w-full">
                                <Label className="text-sm">Data de validade</Label>
                                <Input className="mt-1"/>
                            </div>
                            <div className="mt-2 w-full">
                                <Label  className="text-sm">CVV</Label>
                                <Input className="mt-1"/>
                            </div>
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
                                <div className="flex flex-row items-center gap-4">
                                    <img src="" alt="" className="w-[62px] h-[62px] rounded-lg"/>
                                    <div className="flex flex-col gap-2">
                                        <strong className="text-2xl">Master Card</strong>
                                        <p>1234 5678 9123 4567</p>
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