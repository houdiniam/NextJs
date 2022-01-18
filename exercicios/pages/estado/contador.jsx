import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {
    
    const [valor, setValor] = useState(0)

    const soma = () => setValor(valor+1)
    const subtracao = () => setValor(valor-1)
    
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Contador</h1>
            <ContadorDisplay valor={valor}/>
            <div>
                <button onClick={soma}>+</button>
                <button onClick={subtracao}>-</button>
            </div>
        </div>
    )    
}