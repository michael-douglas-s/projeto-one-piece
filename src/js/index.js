const botoes = document.querySelectorAll(".botao");

const one1 = document.querySelectorAll(".one1");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    newFunction();

    botao.classList.add("selecionado");

    const one1selecionado = document.querySelector(".one1.selecionado");
    one1selecionado.classList.remove("selecionado");

    one1[indice].classList.add("selecionado");
  });
});

function newFunction() {
  const botaoselecionado = document.querySelector(".botao.selecionado");
  botaoselecionado.classList.remove("selecionado");
}
