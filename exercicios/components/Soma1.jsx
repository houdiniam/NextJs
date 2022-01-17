export default function Soma1(props) {
    // props.numero++, isso n pode, pq propriedades é somente leitura
    return (
        <div>
            <h1>{props.numero + 1}</h1>
        </div>
    )
}