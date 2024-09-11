import React from "react";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { BellRinging, CreditCard, Gear, Heart, MapPin, Package, User } from "@phosphor-icons/react";

export const Menubar: React.FC = function() {
    return (
        <div className="mr-12">
            <h1 className="text-4xl font-medium mb-12">Meu perfil</h1>
            <div className="w-[262px] h-[524px] border-[1px]">
                <div className="flex flex-row mt-5 ml-5">
                    <img src="" alt="" className="w-[51px] rounded-full h-[51px] bg-zinc-500 mr-4"/>
                    <div className="flex flex-col">
                        <span>Olá</span>
                        <strong>John Doe</strong>
                    </div>
                </div>

                <Separator className="my-5"/>

                <nav>
                    <ul>
                        <Link to="">
                            <li className="flex flex-row text-foreground h-[56px] items-center ml-5 gap-3">
                                <User size={24} />
                                Informações pessoais
                            </li>
                        </Link>
                        <Link to="">
                            <li className="flex flex-row text-foreground h-[56px] items-center ml-5 gap-3">
                                <Package size={24} />
                                Pedidos
                            </li>
                        </Link>
                        <Link to="">
                            <li className="flex flex-row text-foreground h-[56px] items-center ml-5 gap-3">
                                <Heart size={24} />
                                Lista de desejos
                            </li>
                        </Link>
                        <Link to="">
                            <li className="flex flex-row text-foreground h-[56px] items-center ml-5 gap-3">
                                <MapPin size={24} />
                                Gerenciar endereços
                            </li>
                        </Link>
                        <Link to="">
                            <li className="flex flex-row text-foreground h-[56px] items-center ml-5 gap-3">
                                <CreditCard size={24} />
                                Cartões salvos
                            </li>
                        </Link>
                        <Link to="">
                            <li className="flex flex-row text-foreground h-[56px] items-center ml-5 gap-3">
                                <BellRinging size={24} />
                                Notificações
                            </li>
                        </Link>
                        <Link to="">
                            <li className="flex flex-row text-foreground h-[56px] items-center ml-5 gap-3">
                                <Gear size={24} />
                                Configurações
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}