import React from "react";
import { Helmet } from "react-helmet-async";
import { Content } from "./components/content";
import { Image } from "./components/image";

export const SignIn: React.FC = function() {
    return (
        <>
            <Helmet title="Entrar"/>
            <div className="w-full h-full flex flex-row items-center">
                <Image />
                <Content />
            </div>
        </>
    )
}