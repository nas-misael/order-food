

let cadastrarRestaurante = document.getElementById("cadastrarForm");
let fazDelivery = false;

class Restaurante {
  constructor(
    id,
    nomeRestaurante,
    telefoneRestaurante,
    enderecoRestaurante,
    estadoRestaurante,
    cidadeRestaurante,
    delivery,
    numeroMot,
    tempoDelivery,
    nomeDono,
    emailDono,
    telefoneDono,
    imagemRestaurante
  ) {
    this.id = id
    this.nomeRestaurante = nomeRestaurante;
    this.telefoneRestaurante = telefoneRestaurante;
    this.enderecoRestaurante = enderecoRestaurante;
    this.estadoRestaurante = estadoRestaurante;
    this.cidadeRestaurante = cidadeRestaurante;
    this.delivery = delivery;
    this.numeroMot = numeroMot;
    this.tempoDelivery = tempoDelivery;
    this.nomeDono = nomeDono;
    this.emailDono = emailDono;
    this.telefoneDono = telefoneDono;
    this.imagemRestaurante = imagemRestaurante;
    this.produtos = [];
  }
}

cadastrarRestaurante.addEventListener("click", onFormSubmit);
simDelivery.addEventListener("change", verificaDelivery);
naoDelivery.addEventListener("change", verificaDelivery);

function mudaImagem() {
  const reader = new FileReader();
  reader.onloadend = function () {
    ImagemAdd.src = reader.result;
  };

  if (fotoRestaurante.files[0]) {
    reader.readAsDataURL(fotoRestaurante.files[0]); //reads the data as a URL
  } else {
    ImagemAdd.src = "";
  }
}

function verificaDelivery(e) {
  if (simDelivery.checked) {
    document.getElementById("hide-delivery").removeAttribute("hide");
    document.getElementById("hide-delivery").style.display = "block";
    fazDelivery = true;
  } else {
    document.getElementById("hide-delivery").setAttribute("class", "hide");
    document.getElementById("hide-delivery").style.display = "none";
    fazDelivery = false;
  }
}



function imagem(restaurante) {
  console.log(fotoRestaurante.files[0]);
  const reader = new FileReader();
  if (fotoRestaurante.files[0] == undefined) {
  } else {
    reader.onload = function () {
      // imagem convertida em string em base64.
      console.log(reader.result);

      console.log("Entrou");
    };
  }
  if (fotoRestaurante.files[0]) {
    reader.readAsDataURL(fotoRestaurante.files[0]);
  }
}

function limpaCampos() {
  nomeRestaurante.value = "";
  telefoneRestaurante.value = "";
  enderecoRestaurante.value = "";
  nomeDono.value = "";
  emailDono.value = "";
  telefoneDono.value = "";
  cidadeRestaurante.value = "";
  estadoRestaurante.value = "";
  motoqueiros.value = "";
  tempoRestaurante.value = "";
  fotoRestaurante.value = "";
}

function adicionaStorage() {
  let transformaString = JSON.stringify(arr);
  localStorage.setItem("restaurantes", transformaString);
}

function pegarStorage() {
  if (localStorage.hasOwnProperty("restaurantes")) {
    arr = JSON.parse(localStorage.getItem("restaurantes"));
  }
}

estadoRestaurante.addEventListener("change", options);

let arrCidadesRS = [
  "---- Escolha ---",
  "Porto Alegre",
  "Canoas",
  "Santa Maria",
  "Caxias Do Sul",
  "Pelotas",
];
let arrCidadesSC = [
  "---- Escolha ---",
  "Florianópolis",
  "Itapama",
  "Balneário Camburiú",
  "Itajaí",
  "Blumenau",
  "Penha",
];
let arrCidadesPR = [
  "---- Escolha ---",
  "Curitiba",
  "Cascavel",
  "Londrina",
  "Foz-do-iguaçú",
  "Maringá",
];

function options() {
  let select = document.createElement("select");

  let span = document.getElementById("classe");
  console.log(estadoRestaurante.value);
  switch (estadoRestaurante.value) {
    case "RS":
      {
        let i, L = cidadeRestaurante.options.length - 1;
        for (i = L; i >= 0; i--) {
          cidadeRestaurante.remove(i);
        }

        arrCidadesRS.forEach(function (item, index, arr) {
          let opt = document.createElement("option");
          if (arr[index] == "---- Escolha ---") {
            opt.setAttribute("disabled", "disabled");
          }

          opt.setAttribute("value", item);
          opt.textContent = item;

          cidadeRestaurante.appendChild(opt);
        });
      }
      break;
    case "SC":
      {
        let i, L = cidadeRestaurante.options.length - 1;
        for (i = L; i >= 0; i--) {
          cidadeRestaurante.remove(i);
        }

        arrCidadesSC.forEach(function (item, index, arr) {
          let opt = document.createElement("option");
          if (arr[index] == "---- Escolha ---") {
            opt.setAttribute("disabled", "disabled");
          }
          opt.value = item;
          opt.textContent = item;

          cidadeRestaurante.appendChild(opt);
        });
      }
      break;
    case "PR":
      {
        let i, L = cidadeRestaurante.options.length - 1;
        for (i = L; i >= 0; i--) {
          cidadeRestaurante.remove(i);
        }

        arrCidadesPR.forEach(function (item, index, arr) {
          let opt = document.createElement("option");
          if (arr[index] == "---- Escolha ---") {
            opt.setAttribute("disabled", "disabled");
          }
          opt.value = item;
          opt.textContent = item;

          cidadeRestaurante.appendChild(opt);
        });
      }
      break;

    default:
    //codigo
  }
}

s2a.addEventListener("click", progress);
s2b.addEventListener("click", progress);
s1a.addEventListener("click", progress);
s1b.addEventListener("click", progress);
s3b.addEventListener("click", progress);
s3a.addEventListener("click", progress);
s4a.addEventListener("click", progress);
s4b.addEventListener("click", progress);

function progress(e) {
  console.log(e.target.id);
  switch (e.target.id) {
    case "s2a":
      {
        dados.classList = "active";
        entrega.classList = "active";
      }
      break;
    case "s4a":
      {
        dados.classList = "active";
        entrega.classList = "active";
        representante.classList = "active";
        cadastrar.classList = "active";
      }
      break;
    case "s1a":
      {
        dados.classList.remove("active");
        entrega.classList.remove("active");
        dados.classList = "active";
      }
      break;
    case "s3a":
      {
        dados.classList = "active";
        entrega.classList = "active";
        representante.classList = "active";
      }
      break;
    case "s2b":
      {
        representante.classList.remove("active");
        dados.classList = "active";
        entrega.classList = "active";
      }
      break;
    case "s4b":
      {
        dados.classList = "active";
        entrega.classList = "active";
        representante.classList = "active";
        cadastrar.classList = "active";
      }
      break;
    case "s3b":
      {
        cadastrar.classList.remove("active");
      }
      break;
    case "s1b":
      {
        dados.classList = "active";
        entrega.classList.remove("active");
        representante.classList.remove("active");
        cadastrar.classList.remove("active");
      }
      break;
    default:
      {
        dados.classList = "active";
        entrega.classList.remove("active");
        representante.classList.remove("active");
        cadastrar.classList.remove("active");
      }
      break;
  }
}

function onFormSubmit() {
    let array = [];
    let transformStr;
    let pegaStringImagem = function (callback) {
      const reader = new FileReader();
      let funcArmazena = function (e) {
        callback(e.target.result);
      };
      reader.onload = funcArmazena;
      reader.readAsDataURL(fotoRestaurante.files[0]);
      //aqui já não consegue pegar e fica undefined
    };
  
    function callback(elem) {
      let idSorteado = geraID()
      ImagemAdd.src = elem;
      array.push(elem);
      transformStr = JSON.stringify(elem);
      console.log(transformStr);
      let restaurante = new Restaurante(
        idSorteado,
        nomeRestaurante.value,
        telefoneRestaurante.value,
        enderecoRestaurante.value,
        estadoRestaurante.value,
        cidadeRestaurante.value,
        fazDelivery,
        motoqueiros.value,
        tempoRestaurante.value,
        nomeDono.value,
        emailDono.value,
        telefoneDono.value,
        elem
      );
      console.log(arr)
      console.log(restaurante)
      arr.push(restaurante);
      console.log(arr)
      adicionaStorage();
      pegarStorage();
  
      imagem(restaurante);
      limpaCampos()
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