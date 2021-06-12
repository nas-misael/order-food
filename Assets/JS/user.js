let guardaIdUser = [];
let user = [];
let usuario = []

function getStorage() {
    if (localStorage.hasOwnProperty("IDcliente")) {
      guardaIdUser = JSON.parse(localStorage.getItem("IDcliente"));
      console.log(guardaIdUser);
    }
  }

  function getStorageCliente() {
    if (localStorage.hasOwnProperty("cliente")) {
      user = JSON.parse(localStorage.getItem("cliente"));
      console.log(user);
    }
  }

window.onload = function () {
    getStorage()
    getStorageCliente()

    user.forEach(function (valor, index, arr) {
      if (arr[index].id == guardaIdUser[0]) {
          mostraEmail.innerHTML = "Email: " + arr[index].emailCadastro;
          titlePerfil.innerHTML = "Olá, " + arr[index].nomeCliente + " !"
          usuario.push(arr[index])
      }
    })
    
  };

atualizar.addEventListener('click', edit)
atualizarCliente.addEventListener('click', update)
del.addEventListener('click', excluirCliente)

function edit(elem){
    user.forEach(function(valor, index, arr){
      if(arr[index].id == guardaIdUser[0]){
          console.log(arr[index])
          nicknameAtualizar.value = arr[index].nickname
          nomeAtualizar.value = arr[index].nomeCliente
          cpfAtualizar.value = arr[index].enderecoCliente
          telefoneAtualizar.value = arr[index].telefoneCliente
          carteiraAtualizar.value = arr[index].carteiraCliente
          emailAtualizar.value = arr[index].emailCadastro
          senhaAtualizar.value = arr[index].senhaCadastro
      }
    })
  }

function update(e){
    user.forEach(function(valor, index, arr){
        if(arr[index].id == guardaIdUser[0]){
            console.log(arr[index])
            arr[index].nickname = nicknameAtualizar.value
            arr[index].nomeCliente = nomeAtualizar.value
            arr[index].enderecoCliente = cpfAtualizar.value
            arr[index].telefoneCliente = telefoneAtualizar.value
            arr[index].carteiraCliente = Number(carteiraAtualizar.value)
            arr[index].emailCadastro = emailAtualizar.value
            arr[index].senhaCadastro = senhaAtualizar.value
            adicionaStorage()   
        }
      })
      statusatualizar.innerHTML = 'Cadastro atualizado'
  reset()
}



function excluirCliente(elem){
    console.log(updated)
    if (confirm('Você tem certeza? ')) {
        user.forEach(function(valor, index, arr){
            if(arr[index].id == guardaIdUser[0]){
                arr.splice(index, 1)
                adicionaStorage()
                setTimeout(function() {
                    statusMostrar.innerHTML = 'Carregando...'
                    window.location.href = "../HTML/cadastrar.html";
                }, 1500);
            }
        })
  }
  }

function reset(){
    nicknameAtualizar.value = "";
    nomeAtualizar.value = "";
    cpfAtualizar.value = "";
    telefoneAtualizar.value = "";
    carteiraAtualizar.value = "";
    emailAtualizar.value = "";
    senhaAtualizar.value = ""
  }

  function adicionaStorage() {
    let transformaString = JSON.stringify(user);
    localStorage.setItem("cliente", transformaString);
    console.log(user)
  }