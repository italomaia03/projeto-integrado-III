import mudancaPaginaEvent from "./mudancaPagina.event.js";

export default function(main, paginaInicial) {
    const botaoInicio = document.getElementById("botao-inicio");
    if(botaoInicio){
        botaoInicio.addEventListener("click", () => mudancaPaginaEvent(main, paginaInicial));
    }
}