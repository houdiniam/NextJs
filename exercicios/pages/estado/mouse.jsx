import { useState } from "react"

export default function mouse() {

    /**
     * Abaixo tem um exemplo de destructuring
     * const vehicles = ['mustang', 'f-150', 'expedition'];
     * const [car, truck, suv] = vehicles;
     * 
     * React Hooks, a forma que temos de usar alguns recursos do 
     * react que antes só estavamo disponiveis para funções baseadas em classes.
     * É uma forma de acessar esses recursos em componentes baseados em funções.
     * Componente baseado em função é conhecido como componente funcional.
     * const [x, setX] = useState(0)
     */
    const [x, setX] = useState(0)
    
    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const estilo = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
    }
    
    function quandoMover(ev) {
        setX(ev.clientX)
        alterarY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}