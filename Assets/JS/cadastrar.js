cadastroCliente.addEventListener("click", onFormSubmitCliente);

class Cliente {
    constructor(id, nickname, nomeCliente, enderecoCliente, telefoneCliente, carteiraCliente, emailCadastro, senhaCadastro){
        this.id = id
        this.nickname = nickname
        this.nomeCliente = nomeCliente
        this.enderecoCliente = enderecoCliente
        this.telefoneCliente = telefoneCliente
        this.carteiraCliente = carteiraCliente
        this.emailCadastro = emailCadastro
        this.senhaCadastro = senhaCadastro,
        this.sacola = []
    }
}

function limpaCampos() {
    nickname.value = "";
    nomeCliente.value = "";
    cpfCliente.value = "";
    telefoneCliente.value = "";
    carteiraCliente.value = "";
    emailCadastro.value = "";
    senhaCadastro.value = "";
}
  
  function adicionaStorage() {
    let transformaString = JSON.stringify(arrClientes);
    localStorage.setItem("cliente", transformaString);
  }
  
  function pegarStorage() {
    if (localStorage.hasOwnProperty("cliente")) {
        arrClientes = JSON.parse(localStorage.getItem("cliente"));
    }
  }


function onFormSubmitCliente(e) {
    let array = [];
    let transformStr;
    let pegaStringImagem = function (callback) {
      let funcArmazena = function (e) {
        callback();
        
      }
      funcArmazena()
    };
  
    function callback() {
      let idSorteado = geraID()
      let cliente = new Cliente(
        idSorteado, nickname.value, nomeCliente.value, cpfCliente.value, telefoneCliente.value, carteiraCliente.value, emailCadastro.value, senhaCadastro.value
      );
      
      arrClientes.push(cliente);
      console.log(arrClientes)
      adicionaStorage();
      pegarStorage();
  
      limpaCampos()
      for(let c = 0; c < document.getElementById('entrar').children.length; c++){
          if(document.getElementById('entrar').children.length > 0){
            document.getElementById('entrar').removeChild(document.getElementsByTagName('a'))
            let a = document.createElement('a')
            let i = document.createElement('i')
            i.id = 'entrar2'
            a.innerHTML = "Faça Login"
            a.id = 'linkLogin'
            a.href = "../HTML/autenticacao.html"
            a.className = 'registrar'
            a.append(i)
            console.log(document.getElementById('entrar'))
            document.getElementById('entrar').append(a)
          } 
      }
            let a = document.createElement('a')
            let i = document.createElement('i')
            i.id = 'entrar2'
            a.innerHTML = "Faça Login"
            a.id = 'linkLogin'
            a.href = "../HTML/autenticacao.html"
            a.className = 'registrar'
            a.append(i)
            document.getElementById('entrar').append(a)
      
    }
    pegaStringImagem(callback);

    

  }

function geraID(){
    let arrNumber = [1,2,3,4,5,6,7,8,9]
    let arrAlphabetM = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let result = arrNumber.concat(arrAlphabetM)
    console.log(result)
    let arrSorteados = []
    let stringResultado = ''
    let contador = 1
    while ( contador <= 10 ){
        let sortear = Math.floor(Math.random() * 35)
        arrSorteados.push(sortear)
        contador++
    }
    
    for(let i = 0; i < arrSorteados.length; i++){
        stringResultado += result[arrSorteados[i]]
    }
    return stringResultado
    }