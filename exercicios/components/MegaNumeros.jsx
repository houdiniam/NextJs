export default function MegaNumeros(props) {
    console.log('props', props)
    return (
        <div>
            {props.valor.map((val, i) =>{

                <div key={i} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50px",
                    width: "50px",
                    borderRadius: "25px",
                    backgroundColor: "#222",
                    color: "#fff",
                    fontSize: "2rem",
                    margin: "20px",
                }}>
                    {val}
                </div>
            })}
        </div>
    )
}