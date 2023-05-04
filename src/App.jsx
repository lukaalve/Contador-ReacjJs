import React, { useState } from "react";
import { render } from 'react-dom'
import { Botao } from "./components/Botao";
import { Campo } from "./components/Campo";
import './App.css'




function App() {
    const [contador, setContador] = useState(0)
    const [numeroTabuada, setNumeroTabuada] = useState(0)
    const [numeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    return (
        <React.Fragment>
            <div class="card">
                <h1>Contador React</h1>

                <span>Total: {contador}</span>
                <Campo tipo={'text'} descricao={'Preencha seu nome'}></Campo>
                <br />
                <Botao texto={'Soma 1'} acao={() => setContador(contador + 1)}></Botao>
                {
                    contador > -10
                        ? <Botao texto={'Tira 1'} acao={() => setContador(contador - 1)}></Botao>
                        : <></>

                }
            </div>

            <div class="card">
                <h1>Tabuada</h1>
                <input type="number" value={numeroTabuada} onChange={(event) => setNumeroTabuada(event.target.value)} />
                <button type="button">Calcular</button>
                {
                    numeros.map(numero => <div> {numero} x {numeroTabuada} = {numero * numeroTabuada} </div>)
                }
            </div>

        </React.Fragment>
    )
}

render(<App />, document.getElementById('app'))