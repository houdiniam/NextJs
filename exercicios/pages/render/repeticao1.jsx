export default function repeticao1() {
    const listaDeAprovados = [
        'Jão',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ]
    
    function renderizarLista(){
        const itens = []            
        for (let i = 0; i < listaDeAprovados.length; i++) {
            itens.push(<li key={i}>{listaDeAprovados[i]}</li>)
        }
        return itens
    }
    
    //map é utilizado para transformar um elemento em outro
    //o primeiro elemento do parâmetro é o próprio valor e o segundo é o indice
    function renderizarListaMap(){
        return listaDeAprovados.map((nome, i) =><li key={i}>{nome}</li>)
    }

    return (
        <ul>
            {renderizarListaMap()}
        </ul>
    )
}