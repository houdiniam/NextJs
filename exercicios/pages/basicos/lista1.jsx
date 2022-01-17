
const geradorSpan = (qnt) =>{
    const array = []
    for (let index = 1; index <= qnt; index++) {
        array.push(<span key={index}>{index},</span>)
    }
    return array
}

export default function lista1(){
    
    return(
        <div>
            {geradorSpan(10)}
        </div>
    )
}