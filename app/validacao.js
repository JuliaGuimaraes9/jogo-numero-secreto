function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML +=
      "<div>Valor inválido, diga apenas números.</div>"; // console.log("Valor inválido, diga apenas números.");
    return;
  }
  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `
      <div>Valor inválido, o número secreto deve estar entre ${menorValor} e ${maiorValor}.
      </div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>

    <button id="jogar-novamente" class="btn-jogar">
      Jogar Novamente
    </button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
  } else {
    elementoChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

recognition.addEventListener("end", () => recognition.start());

document.body.addEventListener("click", (event) => {
  if (event.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
