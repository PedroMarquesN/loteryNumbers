import {useState} from "react";
import ContadorDisplay from "./ContadorDisplay";
import LoteryFunction from "./LoteryFunction";
import "./Lotery.css"

export default function Lotery() {
    const [numeros, setNumero] = useState(LoteryFunction())



    const butao = {
        boxShadow: "10px 7px 20px orange"
    }
    function renderNumeros() {
        return numeros.map((numero , index) => <ContadorDisplay key={index} numero={numero}/> );
    }


    return(
        <div className="estilo">
            <h1>Mega Sena</h1>
            <div style={{display:"flex", marginLeft:"5px"}}>
                {renderNumeros()}
            </div>
            <div>
                <button className="button-aposta" onClick={() => setNumero(LoteryFunction())}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}


