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

        const ate6 = 13.40 + 13.40 * 0.80;
        const restodeacimade6 = 13.40 + x * 0.83;
        const acimade6 = restodeacimade6 * 0.80 + restodeacimade6;

        const restodeacimade10 = 16.72 + y * 5.91;
        const acimade10 = restodeacimade10 * 0.80 + restodeacimade10;

        const restodeacimade15 = (46.27 + (z*6.43))
		const acimade15 = (restodeacimade15 *80/100) + restodeacimade15;

        const acimade20 = ("Falar com Klinger");

        if (consumo <= 6) {
            return ate6;
        } else if (consumo <= 10) {
            return acimade6;
        } else if (consumo <= 15) {
            return acimade10;
        } else if (consumo <= 20) {
            return acimade15;
        } else if (consumo > 20 ) {
            return acimade20;
        }
    }
});
