import SomentePar from "../../components/SomentePar";

export default function condicional1() {
    return (
        <div>
            {[...Array(10)].map((x, i) =>
                <SomentePar key={i} numero={i} />
            )}
        </div>
    )
}