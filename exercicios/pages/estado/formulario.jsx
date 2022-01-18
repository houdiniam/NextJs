import { useState } from "react"

export default function formulario() {
    const [valor, setValor] = useState("inicial")
    function alterarInput(){
        setValor(valor+"!")
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <span>{valor}</span>
            {/* Componente não controlado, ou seja, o que eu estou digitando
                não está sendo controlado por nenhum componente. Eu não tenho
                acesso a essa informação. Padrão é sempre usar controlados.
                O estado dos componente tem a verdade absoluta em relação aos
                dados, ou seja, os dados estão sempre dentro do estado do 
                componente. O estado precisa ser modificado para que o visual
                também se altere.
            */}
            <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
            <button onClick={alterarInput}>Alterar estado</button>
        </div>
    )
}