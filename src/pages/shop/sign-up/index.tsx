import React from "react";
import { Helmet } from "react-helmet-async";
import { Content } from "./components/content";
import { Image } from "./components/image";

export const SignUp: React.FC = function() {
    return (
        <>
            <Helmet title="Registrar-se"/>
            <div className="w-full h-full flex flex-row items-center">
                <Image />
                <Content />
            </div>
        </>
    )
}