function calculoEnergia (potencia, horasConsumo, kwPorHora) {
    const res = 3 * potencia * horasConsumo * kwPorHora / 10000 
    return res;
}



const cliclouCalcular= (event) => {
    event.preventDefault();

    const potencia = document.querySelector("#potencia").value;   
    console.log(potencia);

    const horasdeconsumo = document.querySelector('#horasconsumo').value;
    console.log(horasdeconsumo);

    const tarifa = document.querySelector('#tarifaenergia').value;
    console.log(tarifa);

    const resultadoCalculo = calculoEnergia(potencia, horasdeconsumo, tarifa);

    const elementoResultado = document.querySelector("#resultadocalculo");

    elementoResultado.innerHTML = `Seu gasto de energia vai ser de: ${resultadoCalculo.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})}`;

}



