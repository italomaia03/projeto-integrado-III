export default function (main, pagina) {
    if (main.hasChildNodes()) {
        main.lastChild.remove();
        main.appendChild(pagina);
      }
}