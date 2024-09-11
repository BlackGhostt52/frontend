import React from "react";
import background from "@/assets/forgot-password.jpeg"

export const Image: React.FC = function() {
    return (
        <img className="w-[720px] h-full bg-cover" src={background} />
    )
}