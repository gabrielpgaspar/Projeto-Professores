var tbody = document.querySelector("table>tbody");

var form = {
    nome: document.getElementById("nome"),
    email: document.getElementById("email"),
    salario: document.getElementById("salario"),
    data: document.getElementById("data-de-admissao"),
    btnSalvar: document.getElementById("btn-salvar"), 
}


form.btnSalvar.addEventListener('click', () => {

    var produto = {
        nome: form.nome.value,
        email: form.email.value,
        salario: form.salario.value,
        data: form.data.value,
    
    };


    // Aqui preciso verificar se os campos foram preenchidos.
    if(!produto.nome || !produto.email || !produto.salario || !produto.data){
    // Caso não seja preenchido mandar mensagem para usuário preencher.
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    tbody.innerHTML = tbody.innerHTML + `<tr>
    <td>${produto.nome}</td>
    <td>${produto.email}</td>
    <td>${produto.salario}</td>
    <td>${produto.data}</td>
    <td class="botoes-acao">
        <button id="btn-editar">Editar</button>
        <button id="btn-excluir">Excluir</button>
    </td> 
  </tr>`
    
    // Se precisar enviar os dados para salvar no backend.
    obterProfessoresDaAPI(professores);
    limparCampos();
});

function cadastrarProfessoresNaAPI(professores){
    fetch("http://localhost:3000/cadastro",{
        Headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(professores)
        
     } )
    .then(Response => response.json()) 
    .then(response => {
        obterProfessoresDaAPI();
        alert("Deu certo")
    })
    .catch(erro => console.log(erro))


}
   

function obterProfessoresDaAPI(){
    fetch("http://localhost:3000/cadastro")
    .then(Response => response.json()) // Se funcionar
    .then(response => {
        preencherTabela(response);
    })
    .catch(erro => {
        console.log(erro);
        alert("Deu errado")
})
}

function preencherTabela(professores){

    tbody.textContent = "";

    professores.map(professores => {

        // Estou criando as TDs

        var tr = document.createElement("tr");
        var thNome = document.createElement("td");
        var thEmail = document.createElement("td");
        var thSalario = document.createElement("td");
        var thDataDeAdmissao = document.createElement("td");

        tdNome.textContent = professores.id;
        tdEmail.textContent = professores.id;
        tdSalario.textContent = professores.id;
        tdDataDeAdmissao.textContent = professores.id;

        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdSalario);
        tr.appendChild(tdDataDeAdmissao);

        tbody.appendChild(tr);

    })

   
}

function limparCampos(){
    form.nome.value = "";
    form.email.value = "";
    form.salario.value = "";
    form.data.value = "";
}

obterProfessoresDaAPI();