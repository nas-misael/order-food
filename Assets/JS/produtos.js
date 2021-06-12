//Create - Read - Update - Delete

let idRestaurante = []
let botao = document.getElementById('adicione')
let updatedProdutos = null
let count = 0
let arrProduto = []
let arquivoProdutos = document.getElementById('arquivoProdutos')
let imagemProdutos = document.getElementById('imagemProdutos')
let produto 

function getStorage() {
    if (localStorage.hasOwnProperty("dados")) {
      idRestaurante = JSON.parse(localStorage.getItem("dados"));
      console.log(idRestaurante)
    }
  }

function pegarStorage() {
    if (localStorage.hasOwnProperty("restaurantes")) {
      arr = JSON.parse(localStorage.getItem("restaurantes"));
      console.log(arr)
    }
  }

getStorage()
pegarStorage()

arr.forEach(function(valor, index, arr){
    if(arr[index].id == idRestaurante[0]){
        console.log(arr[index].nomeRestaurante)
        document.getElementById('tituloProdutos').innerHTML = "Cadastro de Produtos " + " Restaurante " + " " + arr[index].nomeRestaurante
    }

})

botao.addEventListener('click', onFormSubmitProdutos)

class Produto {
    constructor(id, nomeProduto, descricao, preco, categoria, imagemProduto, nomeImagem, idRest) {
        this.id = id
        this.nomeProduto = nomeProduto
        this.descricao = descricao
        this.preco = preco
        this.categoria = categoria
        this.imagemProduto = imagemProduto,
        this.nomeImagem = nomeImagem,
        this.idRest = idRest,
        this.idDiferente = ""
    }

}

function onFormSubmitProdutos(){
        let array = [];
        console.log(document.getElementById('arquivoProdutos').files.length)
        let transformStr;
        let pegaStringImagem = function (callback) {
         const reader = new FileReader();
         if(document.getElementById('arquivoProdutos').files.length == 0){
           arr.forEach(function(valor, index, arr){
              if(arr[index].id == idRestaurante[0]){
                arr[index].produtos.forEach(function(v, i, a){
                  console.log(updatedProdutos)
                  if(a[i].id == updatedProdutos.id){
                     a[i].imagemProduto = document.getElementById('imagemProdutos').src
                     adicionaStorage()
                     update(a[i])
                  }
                })
              }
           })
         } else {
           let funcArmazena = function (e) {
           callback(e.target.result, arquivoProdutos.files[0].name);
         };
         reader.onload = funcArmazena;
         reader.readAsDataURL(arquivoProdutos.files[0])
         }
      //aqui já não consegue pegar e fica undefined
    };
  
    function callback(elem, name) {
      let idSorteado = geraID()
      imagemProdutos.src = elem;
      array.push(elem);
      transformStr = JSON.stringify(elem);
      console.log(transformStr);
      let produto = new Produto(
        idSorteado,
        nomeProduto.value,
        descricaoProduto.value,
        valorProduto.value,
        categoriasProduto.value,
        elem,
        name,
        idRestaurante[0]
      );
      arr.forEach(function(valor, index, arr){
        if(arr[index].id == idRestaurante[0]){
            console.log(arr[index].produtos)
            arr[index].produtos.push(produto)
        }
        
    })
      adicionaStorage();
      pegarStorage();
  
      imagem(produto);
      limpaCampos()
      console.log(produto)
      if (updatedProdutos == null) {
              create(produto)
          } else {
            arr.forEach(function(valor, index, arr){
              if(arr[index].id == idRestaurante[0]){
                arr[index].produtos.forEach(function(v, i, a){
                  console.log(updatedProdutos)
                  if(a[i].id == updatedProdutos.id){
                    console.log('Chegou aqui')
                     update(a[i])
                  }
                })
              }
           })
          }
          updatedProdutos = null
          adicionaStorage()
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

    function imagem(restaurante) {
        console.log(arquivoProdutos.files[0]);
        const reader = new FileReader();
        if (arquivoProdutos.files[0] == undefined) {
        } else {
          reader.onload = function () {
            // imagem convertida em string em base64.
            console.log(reader.result);
            console.log(arquivoProdutos.files[0].name)
            console.log("Entrou");
          };
        }
        if (arquivoProdutos.files[0]) {
          reader.readAsDataURL(arquivoProdutos.files[0]);
        }
      }
      
      function limpaCampos() {
        nomeProduto.value = ""
        descricaoProduto.value = ""
        valorProduto.value = ""
        categoriasProduto.value = ""
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


function load(){
    pegarStorage()
    let tabelaPai = document.getElementById('timeLista').getElementsByTagName('tbody').innerHTML = ""
    console.log(arr)
    console.log(tabelaPai)
    arr.forEach(function(valor, index, arr){
        if(arr[index].id == idRestaurante[0]){
            createDados(arr[index].produtos)
        }
    })

}

function create(dados) {
    console.log(dados)
    let tabelaPai = document.getElementById('timeLista').getElementsByTagName('tbody')[0]
    console.log(tabelaPai)
    let tr = tabelaPai.insertRow(tabelaPai.length)
    let celula1 = tr.insertCell(0)
    let celula2 = tr.insertCell(1)
    let celula3 = tr.insertCell(2)
    let celula4 = tr.insertCell(3)
    let celula5 = tr.insertCell(4)
    let celula6 = tr.insertCell(5)
    let celula7 = tr.insertCell(6)
    tr.id = dados.id
    let img = document.createElement('img')
    img.src = dados.imagemProduto
    celula2.appendChild(img)
    celula2.className = 'imagemCrud'
    celula1.innerHTML = dados.id
    celula3.innerHTML = dados.nomeProduto
    celula4.innerHTML = dados.preco
    celula5.innerHTML = dados.categoria
    celula6.innerHTML = dados.descricao
    celula7.innerHTML = `<a onclick="edit(this)"><img src="../Assets/Images/edit.png" style="width=25px; height:25px"></a>
    <a onclick="del(this, arr)" ><img src="../Assets/Images/delete.png" style="width=25px; height:25px"></a> `
    
    reset()
    console.log(tr)
    document.getElementById('nomeProduto').focus()

}

function createDados(dados) {
    console.log(dados)
    dados.forEach(function(dados, index, arr){
        console.log(arr[index])
        let tabelaPai = document.getElementById('timeLista').getElementsByTagName('tbody')[0]
        console.log(tabelaPai)
        let tr = tabelaPai.insertRow(tabelaPai.length)
        let celula1 = tr.insertCell(0)
        let celula2 = tr.insertCell(1)
        let celula3 = tr.insertCell(2)
        let celula4 = tr.insertCell(3)
        let celula5 = tr.insertCell(4)
        let celula6 = tr.insertCell(5)
        let celula7 = tr.insertCell(6)
        tr.id = arr[index].id
        let img = document.createElement('img')
        img.src = arr[index].imagemProduto
        celula2.appendChild(img)
        celula2.className = 'imagemCrud'
        celula1.innerHTML = arr[index].id
        celula3.innerHTML = arr[index].nomeProduto
        celula4.innerHTML = arr[index].preco
        celula5.innerHTML = arr[index].categoria
        celula6.innerHTML = arr[index].descricao
        celula7.innerHTML = `<a onclick="edit(this)"><img src="../Assets/Images/edit.png" style="width=25px; height:25px"></a>
        <a onclick="del(this, arr)" ><img src="../Assets/Images/delete.png" style="width=25px; height:25px"></a> `
        
        reset()
        console.log(tr)
        document.getElementById('nomeProduto').focus()
    })

}


function update(dados) {
            let indexProdutos = updatedProdutos.rowIndex - 1
            console.log(indexProdutos)
            console.log(dados)
            updatedProdutos.cells[0].innerHTML = dados.id
            updatedProdutos.cells[2].innerHTML = document.getElementById('nomeProduto').value
            updatedProdutos.cells[3].innerHTML = document.getElementById('valor').value
            updatedProdutos.cells[4].innerHTML = document.getElementById('categorias').value
            updatedProdutos.cells[5].innerHTML = document.getElementById('descricao').value
            
            
            arr.forEach(function(valor, index, arr){
              if(arr[index].id == idRestaurante[0]){
                  arr[index].produtos.forEach(function(valor,index,arr){
                      if(arr[index].id == updatedProdutos.id){
                        arr[index].id = dados.id
                        arr[index].imagemProduto = dados.imagemProduto
                        arr[index].nomeProduto = document.getElementById('nomeProduto').value
                        arr[index].preco = document.getElementById('valor').value
                        arr[index].descricao = document.getElementById('descricao').value
                        arr[index].categoria = document.getElementById('categorias').value
                        adicionaStorage()
                      } 
                    })
                    console.log(arr)        
              }
              
          })
          document.getElementById('nomeProduto').focus()
          document.getElementById('arquivoProdutos').disabled = false
          document.getElementById('imagemProdutos').title = 'Clique para adicionar uma imagem'
          arquivoProdutos = document.getElementById('arquivoProdutos')
          reset()
}

function del(elem) {
            if (confirm('Você tem certeza? ')) {
                let tr = elem.parentNode.parentNode
                console.log(tr)
                let tbody = document.getElementById('tbody')
                tbody.removeChild(tr)
                let td = tr.id
                console.log(td)
                arr.forEach(function(valor, index, arr){
                  if(arr[index].id == idRestaurante[0]){
                      arr[index].produtos.forEach(function(valor,index,arr){
                          if(arr[index].id == td){
                            arr.splice(index, 1)
                            adicionaStorage()
                          }
                      })
                  }
              
              })
                console.log(arr)
            }
        }
    

        function edit(elem) {
            updatedProdutos = elem.parentNode.parentNode
            let idTr = updatedProdutos.id 
            console.log(updatedProdutos)
            console.log(updatedProdutos.cells[4].innerHTML)
            for(let i = 0; i < categoriasProduto.options.length; i++){
              if(categoriasProduto.options[i].value.toLowerCase() == updatedProdutos.cells[4].innerHTML.toLowerCase()){
                console.log('2')
                categoriasProduto.options.selectedIndex = i
              }
            }
            console.log(arquivoProdutos.files)
            arr.forEach(function(valor, index, arr){
              if(arr[index].id == idRestaurante[0]){
                  arr[index].produtos.forEach(function(valor,index,arr){
                      if(arr[index].id == idTr){
                        imagemProdutos.src = arr[index].imagemProduto
                        arquivoProdutos = arr[index].nomeImagem
                      }
                  })
              }
          
          })
            document.getElementById('nomeProduto').value = updatedProdutos.cells[2].innerHTML
            document.getElementById('valor').value = updatedProdutos.cells[3].innerHTML
            document.getElementById('descricao').value = updatedProdutos.cells[5].innerHTML
            document.getElementById('arquivoProdutos').disabled = true
            document.getElementById('imagemProdutos').title = 'Foto do seu produto'
        }

        function reset() {
          nomeProduto.value = ""
          descricaoProduto.value = ""
          valorProduto.value = ""
          categoriasProduto.value = ""
          updatedProdutos = null;
        }

        function validar() {
            let valido
            let input = document.getElementById('nomeProduto')
            let valor = input.value
            valor = valor.toUpperCase()

            let acharIndex = arrProduto.findIndex(element => element.nomeProduto == valor)
            console.log(acharIndex)
            console.log(updatedProdutos)
            if (acharIndex == -1) {
                if (document.getElementById('nomeProduto').value == '') {
                    valido = false
                    alert('Adicione um nome no campo Nome Produto')
                    return valido
                } else {
                    valido = true
                    return valido
                }

            } else {
                alert('Nome já adicionado no array')
                document.getElementById('nomeProduto').focus()
            }

        }

        load()
