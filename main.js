const form = document.getElementById("form-telefone");
const nomes = [];
const notas = [];

let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomePessoa = document.getElementById("nome-pessoa");
    const inputNumeroPessoa = document.getElementById("numero-pessoa");

    if (nomes.includes(inputNomePessoa.value)) {
        alert(`O nome ${inputNomePessoa.value} ja foi inserido`)
    } else {
    nomes.push(inputNomePessoa.value);
    notas.push(parseFloat(inputNumeroPessoa.value));

    let linha = "<tr>";
    linha += `<td>${inputNomePessoa.value}</td>`;
    linha += `<td>${inputNumeroPessoa.value}</td>`;
    linha += "</tr>";

    linhas += linha;
    }

    inputNomePessoa.value ="";
    inputNumeroPessoa.value ="";
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}