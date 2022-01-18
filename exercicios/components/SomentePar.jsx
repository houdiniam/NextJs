export default function SomentePar(props) {
    
    return props.numero % 2 === 0 ? <span>{props.numero}</span> : null

    //Outras formas de fazer
    
    // return (
    //     <div>
    //         {numeroPar ? 
    //             <span>{props.numero}</span> : 
    //             null
    //         }
    //     </div>
    // )
    

    // if(props.numero % 2 === 0) {
    //     return <span>{props.numero}</span>
    // }else {
    //     return null
    // }
}