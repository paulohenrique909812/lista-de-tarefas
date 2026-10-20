function adicionar() {
    let campo = document.getElementById("tarefa");
    let texto = campo.value;

    if (texto == "") {
        alert("Digite uma tarefa!");
        return;
    }

    let item = document.createElement("li");
    item.innerText = texto;

    // clicar na tarefa marca como feita
    item.onclick = function () {
        item.classList.toggle("feita");
    };

    let botaoRemover = document.createElement("button");
    botaoRemover.innerText = "X";
    botaoRemover.onclick = function () {
        item.remove();
    };

    item.appendChild(botaoRemover);
    document.getElementById("lista").appendChild(item);

    campo.value = "";
}
