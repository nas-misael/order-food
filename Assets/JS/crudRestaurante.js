window.onload = function(){
    pegarStorage()
    let tabelaPai = document.getElementById('restauranteCRUD').getElementsByTagName('tabelaDeRestaurantes').innerHTML = ""
    console.log(arr)
    console.log(tabelaPai)
    arr.forEach(function(restaurante){
        create(restaurante)
    })

  
}

function adicionaStorage() {
    let transformaString = JSON.stringify(arr);
    localStorage.setItem("restaurantes", transformaString);
  }
  
  function pegarStorage() {
    if (localStorage.hasOwnProperty("restaurantes")) {
      arr = JSON.parse(localStorage.getItem("restaurantes"));
      console.log(arr)
    }
  }

function create(dados) {
    let dadosRestaurante = dados 
    let tabelaPai = document.getElementById('restauranteCRUD').getElementsByTagName('tbody')[0]
    console.log(tabelaPai)
    let tr = tabelaPai.insertRow(tabelaPai.length);
    tr.id = dados.id
    let img = document.createElement('img')
    let celula1 = tr.insertCell(0)
    let celula2 = tr.insertCell(1)
    let celula3 = tr.insertCell(2)
    let celula4 = tr.insertCell(3)
    let celula5 = tr.insertCell(4)
    let celula6 = tr.insertCell(5)
    let celula7 = tr.insertCell(6)
    img.src = dados.imagemRestaurante
    celula1.appendChild(img)
    celula1.className = 'imagemCrud'
    celula2.innerHTML = dados.nomeRestaurante
    celula3.innerHTML = dados.enderecoRestaurante
    celula4.innerHTML = dados.nomeDono
    celula5.innerHTML = dados.emailDono
    celula6.innerHTML = `<a href="#" onclick="enviaDados(this)" title="Navegue para a aba de cadastro de produtos do seu restaurante" class="linkProdutos">Cadastrar Produtos</a>`
    celula7.innerHTML = ` <div class="box">
    <a class="button" href="#popup1" onclick="edit(this)">Update</a>
</div>
<div id="popup1" class="overlay">
    <div class="popup">
        <h2>Realize suas alterações</h2>

        <a class="close" href="#">&times;</a>
        <div class="content">
            <section>
                <h3>Dados do restaurante:</h3>
                    <input type="text" name="nomeRestauranteCRUD" value="" id="nomeRestauranteCRUD" placeholder="Nome do seu restaurante" required>
                    <input type="tel" name="telefoneRestaurante"  value="" id="telefoneRestauranteCRUD"  pattern="[0-9]{10}" title="Somente números - 10 digitos" placeholder="Telefone do seu restaurante" required>
                    <input type="text" name="enderecoRestaurante" id="enderecoRestauranteCRUD" value="" placeholder="Endereço do seu restaurante" required>
                <br />
            </section>
            <section>
                <h3>Já faz entrega?</h3>
                <ul class="payment-methods">
                  <li class="payment-method paypal">
                    <input type="radio" name="deliveryCRUD" id="simDeliveryCRUD"  value="sim">
                    <label for="simDelivery">Sim</label>
                  </li>
                  <li class="payment-method pagseguro">
                    <input type="radio" name="deliveryCRUD" id="naoDeliveryCRUD" value="nao">
                    <label for="naoDelivery">Não</label>
                  </li>
                </ul>
                  <br />
                  <div class="hide" id="hide-delivery">  
                  <input type="number" name="motoqueirosCRUD" min="1" id="motoqueirosCRUD" placeholder="Quantidade de motoqueiros (Ex:2)">
                  </div>      
            </section>
            <section>
                <h3>Contato do representante legal</h3>
                    <input type="text" name="nomeDonoCRUD" value="" id="nomeDonoCRUD" placeholder="Nome responsável" required>
                    <input type="tel" name="telefoneDonoCRUD"  value="" id="telefoneDonoCRUD"  pattern="[0-9]{10}" title="Somente números - 10 digitos" placeholder="Telefone responsável" required>
                    <input type="email" name="emailDonoCRUD" id="emailDonoCRUD" value="" required placeholder="E-mail responsável">
                <br />
            </section>
            <section>
                <button type="button" id="atualizar" onclick="update()">Atualizar</button>
                <button type="button" id="excluir" onclick="excluirRestaurante(this)" class="excluir">Excluir</button>
            </section>
        </div>
    </div>
</div> `
    console.log(tr)

    
  }
  
function enviaDados(elem){
    let arrDados = []
    
    armazenaEscolhido = elem.parentNode.parentNode.id
    arrDados.push(armazenaEscolhido)
    console.log(arrDados)
    
      let transformaStringDados = JSON.stringify(arrDados);
      localStorage.setItem("dados", transformaStringDados);
    
    setTimeout(function() {
      window.location.href = "../HTML/produtos.html";
  }, 1500);
}


function edit(elem){
  updated = elem.parentNode.parentNode.parentNode
  let restauranteResultado = []
  arr.forEach(function(restaurante){
    if(updated.id == restaurante.id){
      restauranteResultado.push(restaurante)
    }
  })
  restauranteResultado.forEach(function(restaurante){
    console.log(restaurante)
    if(restaurante.delivery == true){
      document.getElementById('simDeliveryCRUD').checked = true
      document.getElementById("hide-delivery").removeAttribute("hide");
      document.getElementById("hide-delivery").style.display = "block";
    } else {
      document.getElementById('naoDeliveryCRUD').checked = true
      document.getElementById("hide-delivery").setAttribute("class", "hide");
      document.getElementById("hide-delivery").style.display = "none";
    }

    document.getElementById('nomeRestauranteCRUD').value = restaurante.nomeRestaurante
    document.getElementById('telefoneRestauranteCRUD').value = restaurante.telefoneRestaurante
    document.getElementById('enderecoRestauranteCRUD').value = restaurante.enderecoRestaurante
    document.getElementById('motoqueirosCRUD').value = restaurante.numeroMot

    document.getElementById('nomeDonoCRUD').value = restaurante.nomeDono
    document.getElementById('telefoneDonoCRUD').value = restaurante.telefoneDono
    document.getElementById('emailDonoCRUD').value = restaurante.emailDono
  })
}


function update(){
  /* let restauranteResultado = []
  arr.forEach(function(restaurante){
    if(updated.id == restaurante.id){
      restauranteResultado.push(restaurante)
    }
  }) */
  console.log(updated)
  updated.cells[1].innerHTML = document.getElementById('nomeRestauranteCRUD').value 
  updated.cells[2].innerHTML = document.getElementById('enderecoRestauranteCRUD').value
  updated.cells[3].innerHTML = document.getElementById('nomeDonoCRUD').value
  updated.cells[4].innerHTML = document.getElementById('emailDonoCRUD').value
  
  let index = updated.rowIndex - 1
  console.log(index)
  console.log(arr)
  arr[index].nomeRestaurante = document.getElementById('nomeRestauranteCRUD').value
  arr[index].telefoneRestaurante = document.getElementById('telefoneRestauranteCRUD').value
  arr[index].enderecoRestaurante = document.getElementById('enderecoRestauranteCRUD').value
  arr[index].numeroMot = document.getElementById('motoqueirosCRUD').value
  arr[index].nomeDono = document.getElementById('nomeDonoCRUD').value
  arr[index].telefoneDono = document.getElementById('telefoneDonoCRUD').value
  arr[index].emailDono = document.getElementById('emailDonoCRUD').value 
  adicionaStorage()   
  reset()
 
}

function reset(){
  document.getElementById("nomeRestauranteCRUD").value = "";
  document.getElementById("telefoneRestauranteCRUD").value = "";
  document.getElementById("enderecoRestauranteCRUD").value = "";
  document.getElementById("motoqueirosCRUD").value = "";
  document.getElementById("nomeDonoCRUD").value = "";
  document.getElementById("telefoneDonoCRUD").value = "";
  document.getElementById("emailDonoCRUD").value = "";
  updated = null;
}

function excluirRestaurante(elem){
  console.log(updated)
  if (confirm('Você tem certeza? ')) {
    let tr = updated
    let tbody = document.getElementById('tabelaDeRestaurantes')
    tbody.removeChild(tr)
    let td = tr.getAttribute("id")
    console.log(td)
    console.log(tr)
    console.log(tbody)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]["id"])
        if (arr[i]["id"] == td) {
            console.log('entrou')
            arr.splice(i, 1)
            adicionaStorage()
        }
    }
    console.log(arr)
}
}
