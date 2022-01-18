export default function Filho(props) {
    //Passei no enem!
    // onClick, por padrão, já passar o evento como parametro
    //onClick={props.funcao} é equivalente a onClick={ev => props.funcao(ev)}
    //onClick={props.funcao()} não vai passar nada. undefined
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com o pai #01</button>
            <button onClick={() => props.funcao("Passei no enem!!", "uhuul", 10)}>Falar com o pai #02</button>
        </div>
    )
}