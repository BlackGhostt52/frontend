import React from "react";
import { Helmet } from "react-helmet-async";
import { Content } from "./components/content";
import { Image } from "./components/image";

export const ForgotPassword: React.FC = function() {
    return (
        <>
            <Helmet title="Recuperar senha"/>
            <div className="w-full h-full flex flex-row items-center">
                <Image />
                <Content />
            </div>
        </>
    )
}