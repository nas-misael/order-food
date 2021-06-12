let idClientes = []

function getStorage() {
    if (localStorage.hasOwnProperty("cliente")) {
        idClientes = JSON.parse(localStorage.getItem("cliente"));
        console.log(idClientes)
    }
}

getStorage()

btnRegistrar.addEventListener('click', enviaDadosCliente)

function enviaDadosCliente(elem){
    let arrDados = []
    
    //armazenaEscolhido = elem.parentNode.parentNode.id
    //arrDados.push(armazenaEscolhido)
    idClientes.forEach(function(valor, index, arr){
        if((arr[index].emailCadastro == emailLogin.value) && (arr[index].senhaCadastro == senhaLogin.value)){
            console.log(arr[index])
            if(arrDados.length > 0){
                arrDados.splice(0, 1)
                arrDados.push(arr[index].id)
                let transformaStringDados = JSON.stringify(arrDados);
                localStorage.setItem("IDcliente", transformaStringDados);
                setTimeout(function() {
                    document.getElementById('status').innerHTML = 'Carregando...'
                    window.location.href = "../HTML/profile.html";
                }, 1500);
            } else {
                arrDados.push(arr[index].id)
                let transformaStringDados = JSON.stringify(arrDados);
                localStorage.setItem("IDcliente", transformaStringDados);
                setTimeout(function() {
                    document.getElementById('status').innerHTML = 'Carregando...'
                    window.location.href = "../HTML/profile.html";
                }, 1500);
            }
            
        } 
        document.getElementById('status').innerHTML = 'Falha... Tente novamente'
    })
    function limpaCampos(){
        emailLogin.value = ""
        senhaLogin.value = ""
        emailLogin.focus()
    }
    limpaCampos()
}
