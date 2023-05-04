import React from "react";

export function Campo({ tipo, descricao }) {
    return <input type={tipo} placeholder={descricao} />
}