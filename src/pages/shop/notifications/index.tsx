import React from "react";
import { Helmet } from "react-helmet-async";

export const Notifications: React.FC = function() {
    return (
        <>
            <Helmet title="Notificações"/>
            <div className="w-full mt-[88px]">
            {
                Array.from({ length: 4 }).map((_, index) => {
                    return (
                        <div key={index} className="w-full py-5 flex flex-row items-center justify-between border-b-zinc2100 border-b-[1px]">
                            <div className="flex flex-row gap-4">
                                <img src="" alt="" className="w-[53px] h-[53px]"/>
                                <div className="">
                                    <strong>John Doe</strong>
                                    <p>Você atualizou sua foto de perfil</p>
                                </div>
                            </div>
                            <p>11:55 AM</p>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}