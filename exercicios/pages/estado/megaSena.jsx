import { useEffect, useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../function/mega"

export default function megaSena() {
    
    const [qtde, setQtde] = useState(6)
    const [valor, setValor] = useState([])

    useEffect(() => {
        setValor(mega(qtde))
    }, [])

    function renderNumeros() {
        return valor.map(numero => <NumeroDisplay key={numero} numero={numero} />)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <h1>Mega Sena</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20}  value={qtde} onChange={ev => setQtde(ev.target.value)}/>
                <button onClick={() => setValor(mega(qtde))}>Gerar Aposta</button>
            </div>
        </div>
    )    
}