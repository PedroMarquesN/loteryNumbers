export default function LoteryFunction(quantidade = 6, numeros=[]) {
    let qtde =  +quantidade
    if(qtde < 6 && qtde > 60 ){
        throw "quantidade Inválida"
    }

    if (numeros.length === qtde){
        return numeros.sort((a, b) => a - b )
    }

    const numeroAleatorio = parseInt((Math.random()*60)+1 )
    if (!numeros.includes(numeroAleatorio)){
        return LoteryFunction(qtde , [...numeros,  numeroAleatorio] ,)
    }else {
        return LoteryFunction(qtde, numeros)
    }
}