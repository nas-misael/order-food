let guardaIdUser = [];
let user = [];
let ids = [];

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

getStorage();
getStorageCliente();

window.onload = function () {
  pegarStorage();
  count = 0;
  pegarStorageClientes()
  create(arr);
  
  user.forEach(function (valor, index, arr) {
    if (arr[index].id == guardaIdUser[0]) {
      if(arr[index].carteiraCliente == "0"){
        carteiraUser.innerHTML = 0  
        localUser.innerHTML = arr[index].enderecoCliente;
        saudacao.innerHTML = "Olá, " + arr[index].nickname + "!";
        sacolaLoad(arr[index].sacola)
      } else {
        localUser.innerHTML = arr[index].enderecoCliente;
        carteiraUser.innerHTML = Number(arr[index].carteiraCliente)
        saudacao.innerHTML = "Olá, " + arr[index].nickname + "!";
        sacolaLoad(arr[index].sacola)
      }
    }
  });
  console.log(carteiraUser.innerHTML)
};

function pegarStorage() {
  if (localStorage.hasOwnProperty("restaurantes")) {
    arr = JSON.parse(localStorage.getItem("restaurantes"));
    console.log(arr);
  }
}

function pegarStorageClientes() {
  if (localStorage.hasOwnProperty("cliente")) {
    user = JSON.parse(localStorage.getItem("cliente"));
    console.log(user);
  }
}

function adicionaStorage() {
  let transformaString = JSON.stringify(user);
  localStorage.setItem("cliente", transformaString);
  console.log(user)
}


let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

function mais(elem) {
  let inputs = document.getElementsByName("inputMais");
  for (let a = 0; a < inputs.length; a++) {
    if (ids[a] == elem.parentNode.parentNode.id) {
      let variavel = `${ids[a]}`;
      if (inputs[a].id == elem.parentNode.parentNode.id) {
        user.forEach(function (valor, index, arr) {
          if (arr[index].id == guardaIdUser[0]) {
            if((arr[index].carteiraCliente == "0") || (arr[index].carteiraCliente < 0)){
              inputs[a].disabled = true
              for(let i = 0; i < document.getElementsByClassName('a').length; i++){
                document.getElementsByClassName('a')[i].style.cursor = 'not-allowed'
                document.getElementsByClassName('b')[i].style.cursor = 'not-allowed'
                document.getElementsByClassName('c')[i].style.cursor = 'not-allowed'
                inputs[i].style.cursor = 'not-allowed'
              }
            } else {
              var atual = inputs[a].value;
              var novo = atual - -1; //Evitando Concatenacoes
              inputs[a].value = novo;
            }
          }
        });
      }
    }
  }
}

function menos(elem) {
  let inputs = document.getElementsByName("inputMais");
  for (let a = 0; a < inputs.length; a++) {
    if (ids[a] == elem.parentNode.parentNode.id) {
      let variavel = `${ids[a]}`;
      if (inputs[a].id == elem.parentNode.parentNode.id) {
        user.forEach(function (valor, index, arr) {
          if (arr[index].id == guardaIdUser[0]) {
            if((arr[index].carteiraCliente == "0") || (arr[index].carteiraCliente < 0)){
              inputs[a].disabled = true
              for(let i = 0; i < document.getElementsByClassName('a').length; i++){
                document.getElementsByClassName('a')[i].style.cursor = 'not-allowed'
                document.getElementsByClassName('b')[i].style.cursor = 'not-allowed'
                document.getElementsByClassName('c')[i].style.cursor = 'not-allowed'
                inputs[i].style.cursor = 'not-allowed'
              }
            } else {
              var atual = inputs[a].value;
        if (atual > 0) {
          //evita números negativos
          var novo = atual - 1;
          inputs[a].value = novo;
        }
            }
          }
        });
        
      }
    }
  }
}

function create(restaurante) {
  console.log(restaurante);
  restaurante.forEach(function (valor, index, arr) {
    criaCards(arr[index].produtos, arr);
  });
}



function excluir(produtos, u, index, idProd, elem){
  /* var novaArr = produtos.filter(function(este, i) {
    return produtos.indexOf(este) === i; 
  }); */
  //console.log(novaArr)
  let li = elem.parentNode.parentNode.parentNode
  listaSacola.removeChild(li)
  for(let i = 0; i < u.sacola.length; i++){
    let found = produtos.find(produto => produto.id == li.id);
    console.log(found)
    console.log(u.sacola[i])
    if(found == u.sacola[i]){
      if(user[index].id == u.id){
        console.log(user[index].sacola[i])
        user[index].sacola.splice(i, 1)
        console.log(user[index].sacola)
        adicionaStorage()
      }
    }
  }

}


function criaCards(produtos, restaurante) {

  produtos.forEach(function (valor, index, arr) {
    count++;
    let divReceita = document.createElement("div");
    let divConteiner = document.createElement("conteiner");
    let LinkImagemA1 = document.createElement("a");
    let img1 = document.createElement("img");
    let LinkImagem2 = document.createElement("a");
    let img2 = document.createElement("img");
    let divConteudo = document.createElement("div");
    let h4 = document.createElement("h4");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let divConteudoRestaurante = document.createElement("div");
    let divPreco = document.createElement("div");
    let span = document.createElement("span");
    let random = geraID();

    divConteiner.className = "conteiner";
    divReceita.className = "divReceita";
    LinkImagemA1.href = `#${random}`;
    img1.src = arr[index].imagemProduto;
    img1.alt = "Imagem da imagem do produto";
    LinkImagem2.id = random;
    LinkImagem2.href = "#";
    LinkImagem2.className = "lightbox";
    img2.src = arr[index].imagemProduto;
    img2.alt = "Zoom da imagem do produto";
    img2.dataOptions = "zoomWidth:400px;zoomHeight:170px;;hint:off";
    divConteudo.className = "curso-info";
    h4.textContent = arr[index].nomeProduto;
    p1.innerHTML = arr[index].descricao;
    divReceita.id = arr[index].id;
    restaurante.forEach(function (valor, i, a) {
      if (produtos[index].idRest == a[i].id) {
        p2.innerHTML = "Nome Restaurante: " + a[i].nomeRestaurante;
        p3.innerHTML = "Endereço Restaurante: " + a[i].enderecoRestaurante;
        p4.innerHTML = "Faz delivery?: " + a[i].delivery;
        divConteudoRestaurante.append(p2);
        divConteudoRestaurante.append(p3);
        divConteudoRestaurante.append(p4);
      }
    });

    {
      /* <button onclick="menos()" class="a"><i id="menos"></i></button><input name="total" min="1" id="total" value="" type="number" step="1" disabled/><button onclick="mais()" class="b"><i id="mais"></i></button>
        <a href="#" id="comprasLink"><i id="compras"></i></a> */
    }
    let buttonMenos = document.createElement("button");
    let buttonMais = document.createElement("button");
    let iMenos = document.createElement("i");
    let iMais = document.createElement("i");
    let input = document.createElement("input");
    let aCompras = document.createElement("a");
    let iCompras = document.createElement("i");

    ids.push(arr[index].id);
    input.name = "inputMais";
    input.id = arr[index].id;
    input.min = "1";
    input.value = " ";
    input.type = "number";
    input.step = "1";
    input.value = ""
    input.disabled = true;
    iMais.id = "mais";
    iMenos.id = "menos";
    buttonMenos.className = "a";
    buttonMais.className = "b";
    aCompras.className = 'c'
    aCompras.onclick = function () {
      sacola(produtos, restaurante, arr[index].id, aCompras)
    };
    aCompras.href = "#popup1";
    /* aCompras.id = arr[index].id */
    iCompras.id = "compras";

    buttonMais.onclick = function () {
      mais(this);
    };
    buttonMenos.onclick = function () {
      menos(this);
    };
    
    divPreco.className = "curso-preco";
    span.className = "preco-por";
    span.innerHTML = "R$: " + arr[index].preco;

    LinkImagemA1.appendChild(img1);
    LinkImagem2.appendChild(img2);
    divConteiner.appendChild(LinkImagemA1);
    divConteiner.appendChild(LinkImagem2);
    divConteudo.appendChild(h4);
    divConteudo.appendChild(p1);
    divConteudoRestaurante.appendChild(p2);
    divConteudoRestaurante.appendChild(p3);
    divConteudoRestaurante.appendChild(p4);
    divPreco.appendChild(span);
    divConteudo.appendChild(divConteudoRestaurante);
    divConteiner.appendChild(divConteudo);
    divConteiner.appendChild(divPreco);
    buttonMenos.appendChild(iMenos);
    buttonMais.appendChild(iMais);
    divConteiner.appendChild(buttonMenos);
    divConteiner.appendChild(input);
    divConteiner.appendChild(buttonMais);
    aCompras.appendChild(iCompras);
    divConteiner.appendChild(aCompras);
    divReceita.appendChild(divConteiner);
    receitas.appendChild(divReceita);
    

    count++;
  });
}

function sacola(produtos, restaurante, idProd, compras) {
  
  let inputs = document.getElementsByName("inputMais");
  let armazenaValor = 0
  let pegaValorProduto = 0
  for (let a = 0; a < inputs.length; a++) {
    if (ids[a] == idProd) {
      let variavel = `${ids[a]}`;
      if (inputs[a].id == idProd) {
        armazenaValor = Number(inputs[a].value)
      }
    }
  }
  console.log(document.getElementById('carteiraUser').innerHTML)
  if((document.getElementById('carteiraUser').innerHTML == 0) || (document.getElementById('carteiraUser').innerHTML < 0)){
    alert('Sem saldo! Você não pode comprar nada')
    compras.href = '#'
  } else {

    if (confirm("Você tem certeza?")) {
      let li = document.createElement("li");
      let p = document.createElement("h2");
      let a = document.createElement("a");
      let img = document.createElement("img");
      let divImagem = document.createElement("div");
      let div = document.createElement("div");
      let divCoursesContainer = document.createElement('div')
      let divCourse = document.createElement('div')
      let divCoursePreview = document.createElement('div')
      let h2 = document.createElement('h2')
      let divCourseInfo = document.createElement('div')
      let button = document.createElement('button')
      let gerador = geraID()
      divCoursesContainer.className = 'courses-container'
      divCoursePreview.className = 'course-preview'
      divCourse.className = 'course'
      divCourseInfo.className = 'course-info'
      button.className = 'btn'
      produtos.forEach(function (valor, i, ar) {
        if (produtos[i].id == idProd) {
          pegaValorProduto = Number(produtos[i].preco)
          
  
          user.forEach(function (valor, index, arr) {
            if (arr[index].id == guardaIdUser[0]) {
              let valorProduto = 0
              valorProduto = armazenaValor * pegaValorProduto
              for(let b = 0; b < armazenaValor; b++){
                console.log(valorProduto)
                if(arr[index].carteiraCliente < pegaValorProduto){
                  alert('Não vai cadastrar')
                } else {
                  arr[index].carteiraCliente -= pegaValorProduto
                  user[index].sacola.push(produtos[i]);
                  img.src = produtos[i].imagemProduto;
          img.className = "imagemCrud";
          h2.innerHTML = produtos[i].nomeProduto;
          p.innerHTML = produtos[i].descricao
          p.id = 'descricao'
          button.innerHTML = 'Excluir'
          divCoursePreview.append(h2)
          divCourseInfo.append(img)
          divCourseInfo.append(p)
          divCourseInfo.append(button)
          divCourse.append(divCoursePreview)
          divCourse.append(divCourseInfo)
          divCoursesContainer.append(divCourse)
          listaSacola.append(divCoursesContainer);
          divCoursesContainer.id = idProd
                }
              }
              console.log(arr[index].sacola);
              button.onclick = function() {excluir(produtos, user[index], index, idProd, this)}
              adicionaStorage()
              carteiraUser.innerHTML = Number(arr[index].carteiraCliente)
              
              valorProduto = 0
              armazenaValor = 0
              pegaValorProduto = 0
              for (let a = 0; a < inputs.length; a++) {
                if (ids[a] == idProd) {
                  let variavel = `${ids[a]}`;
                  if (inputs[a].id == idProd) {
                    inputs[a].value = ""
                  }
                }
              }
            }
          });
        }
      });
    }
  } 
}


function sacolaLoad(produtos){
  console.log(produtos)
  produtos.forEach(function(valor, index, ar){
      console.log(ar[index])
      let li = document.createElement("li");
      let p = document.createElement("h2");
      let a = document.createElement("a");
      let img = document.createElement("img");
      let divImagem = document.createElement("div");
      let div = document.createElement("div");
      let divCoursesContainer = document.createElement('div')
      let divCourse = document.createElement('div')
      let divCoursePreview = document.createElement('div')
      let h2 = document.createElement('h2')
      let divCourseInfo = document.createElement('div')
      let button = document.createElement('button')
      divCoursesContainer.className = 'courses-container'
      divCoursePreview.className = 'course-preview'
      divCourse.className = 'course'
      divCourseInfo.className = 'course-info'
      button.className = 'btn'
      img.src = ar[index].imagemProduto;
      img.className = "imagemCrud";
      h2.innerHTML = ar[index].nomeProduto;
      p.innerHTML = ar[index].descricao
      p.id = 'descricao'
      button.innerHTML = 'Excluir'
      button.id = 'botao1'
      divCoursePreview.append(h2)
      divCourseInfo.append(img)
      divCourseInfo.append(p)
      divCourseInfo.append(button)
      divCourse.append(divCoursePreview)
      divCourse.append(divCourseInfo)
      divCoursesContainer.append(divCourse)
      listaSacola.append(divCoursesContainer);
      divCoursesContainer.id = ar[index].id
      user.forEach(function(valor, index, arr){
        if(user[index].id == guardaIdUser[0]){
          console.log(user[index].sacola.length)
          button.onclick = function() {excluir(produtos, user[index], index, ar[index].id, this)}
          adicionaStorage()
        }
 
      })
      
  })
}




function geraID() {
  let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arrAlphabetM = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let result = arrNumber.concat(arrAlphabetM);
  console.log(result);
  let arrSorteados = [];
  let stringResultado = "";
  let contador = 1;
  while (contador <= 10) {
    let sortear = Math.floor(Math.random() * 35);
    arrSorteados.push(sortear);
    contador++;
  }

  for (let i = 0; i < arrSorteados.length; i++) {
    stringResultado += result[arrSorteados[i]];
  }
  return stringResultado;
}

