import Padrao, { Comp1, Comp2, Comp4, Comp5, Comp6, Comp7 } from "../../components/modulo/funcionais"

export default function teste() {
    return(
        <div>
            <Comp1/>
            <Comp2/>
            <Padrao/>
            <Comp4/>
            <Comp5/>
            <Comp6/>
            <Comp7 msg="aloha"/>
        </div>
    )
}