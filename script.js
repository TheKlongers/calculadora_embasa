document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calc-form");
    const resultadoDiv = document.getElementById("resultado");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const valorAnterior = parseFloat(document.getElementById("valor-anterior").value);
        const valorAtual = parseFloat(document.getElementById("valor-atual").value);

        const resultado = calculaValorAPagar(valorAnterior, valorAtual);

        resultadoDiv.textContent = `O valor a pagar é de: R$ ${resultado.toFixed(2)}`;
        resultadoDiv.classList.remove("hidden");
    });

    function calculaValorAPagar(valorAnterior, valorAtual) {
        const consumo = valorAtual - valorAnterior;
        const x = consumo - 6;
        const y = consumo - 10;
        const z = consumo - 15;
        const w = consumo - 20;

        const ate6 = 36.47 + 36.47 * 0.80;
        const restodeacimade6 = 37.47 + x * 1.44;
        const acimade6 = restodeacimade6 * 0.80 + restodeacimade6;
        const restodeacimade10 = 42.23 + y * 10.21;
        const acimade10 = restodeacimade10 * 0.80 + restodeacimade10;
        const restodeacimade15 = 93.28 + z * 10.93;
        const acimade15 = restodeacimade15 * 0.80 + restodeacimade15;
        const restodeacimade20 = 147.93 + w * 12.28;
        const acimade20 = restodeacimade20 * 0.80 + restodeacimade20;

        if (consumo <= 6) {
            return ate6;
        } else if (consumo <= 10) {
            return acimade6;
        } else if (consumo <= 15) {
            return acimade10;
        } else if (consumo <= 20) {
            return acimade15;
        } else if (consumo <= 25) {
            return acimade20;
        } else {
            return "Falar com Klinger";
        }
    }
});
