export class Input {
  constructor(props) {
    this.props = props;
  }

  executar() {
    const { rotulo, nome, id, classe, tipo, valor } = this.props;
    const input = document.createElement("input");
    const label = document.createElement("label");
    const conteiner = document.createElement("div");
    if (id) {
      input.id = id;
    }
    if (classe) {
      input.classList.add(classe);
    }
    if (!tipo) {
      input.type = "text";
    }
    if (tipo === "file") {
      input.accept = "image/x-png,image/gif,image/jpeg";
    }
    if (valor) {
      input.value = valor;
    }

    input.name = nome;
    input.type = tipo;

    label.innerText = rotulo;
    label.htmlFor = id;

    conteiner.append(label, input);
    return conteiner;
  }
}
