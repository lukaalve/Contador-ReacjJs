import React from "react"

export const Botao = ({ texto, acao }) => {
    return (
        <button type="button" onClick={acao}>{texto}</button>
    )
}