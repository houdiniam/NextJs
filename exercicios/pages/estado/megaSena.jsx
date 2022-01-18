import { useState } from "react"
import MegaNumeros from "../../components/MegaNumeros"

export default function megaSena() {
    
    const [valor, setValor] = useState([])

    const gerarSeisNumeros = () => {
        const num = []
        for (let i = 0; i < 6; i++) {
            const data = {
                id: i,
                nume: Math.floor(Math.random() * 60), 
            }
            num.push(data)
            setValor(num)
        }
        console.log('valor', valor)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Mega Sena</h1>
            <MegaNumeros valor={valor}/>
            <div>
                <button onClick={gerarSeisNumeros}>Gerar 6 números</button>
            </div>
        </div>
    )    
}