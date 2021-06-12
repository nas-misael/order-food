/* Array armazena restaurantes */
let arr = []
let arrDados = []
let arrClientes = []
let idsDiferente = []
let armazenaID = []
let valorGerado 

/* Dados restaurante */
let nomeRestaurante = document.getElementById('nomeRestaurante')
let telefoneRestaurante = document.getElementById('telefoneRestaurante')
let enderecoRestaurante = document.getElementById('enderecoRestaurante')
let estadoRestaurante = document.getElementById('estadoRestaurante')
let cidadeRestaurante = document.getElementById('cidadeRestaurante')

/* Delivery */
let simDelivery = document.getElementById('simDelivery')
let naoDelivery = document.getElementById('naoDelivery')
let motoqueiros = document.getElementById('motoqueiros')
let tempoRestaurante = document.getElementById('tempoRestaurante')


/* Dono restaurante */
let nomeDono = document.getElementById('nomeDono')
let telefoneDono = document.getElementById('telefoneDono')
let emailDono = document.getElementById('emailDono')

/* Foto restaurante */
let fotoRestaurante = document.getElementById('arquivo-restaurante')
let ImagemAdd = document.getElementById('ImagemAdd')


/* Botões progress */
let s2a = document.getElementById('s2a')
let s2b = document.getElementById('s2b')
let s1a = document.getElementById('s1a')
let s1b = document.getElementById('s1b')
let s3a = document.getElementById('s3a')
let s3b = document.getElementById('s3b')
let s4a = document.getElementById('s4a')
let s4b = document.getElementById('s4b')

let dados = document.getElementById('dados')
let entrega = document.getElementById('entrega')
let representante = document.getElementById('representante')
let cadastrar = document.getElementById('cadastrar')


/* CRUD Restaurante */
let updated = null
let armazenaEscolhido = null


/* Produtos */
let nomeProduto = document.getElementById('nomeProduto')
let valorProduto = document.getElementById('valor')
let categoriasProduto = document.getElementById('categorias')
let descricaoProduto = document.getElementById('descricao')

/* Cliente */
let nickname = document.getElementById('nickname')
let nomeCliente = document.getElementById('nomeCliente')
let cpfCliente = document.getElementById('cpfCliente')
let telefoneCliente  = document.getElementById('telefoneCliente')
let carteiraCliente = document.getElementById('carteiraCliente')
let emailCadastro = document.getElementById('emailCadastro')
let senhaCadastro = document.getElementById('senhaCadastro')
let cadastroCliente = document.getElementById('cadastroCliente')
let status = document.getElementById('status')
let emailLogin = document.getElementById('emailLogin')
let senhaLogin = document.getElementById('senhaLogin')
let btnRegistrar = document.getElementById('btnRegistrar')

/* Profile */

let localUser = document.getElementById('localUser')
let carteiraUser = document.getElementById('carteiraUser')
let saudacao = document.getElementById('saudacao')
let receitas = document.getElementById('receitas')
let listaSacola = document.getElementById('listaSacola')

/* User */
let mostraEmail = document.getElementById('mostraEmail')
let titlePerfil = document.getElementById('titlePerfil')
let nicknameAtualizar = document.getElementById('nicknameAtualizar')
let nomeAtualizar = document.getElementById('nomeAtualizar')
let cpfAtualizar = document.getElementById('cpfAtualizar')
let telefoneAtualizar = document.getElementById('telefoneAtualizar')
let carteiraAtualizar = document.getElementById('carteiraAtualizar')
let emailAtualizar = document.getElementById('emailAtualizar')
let senhaAtualizar = document.getElementById('senhaAtualizar')
let atualizarCliente = document.getElementById('atualizarCliente')
let statusatualizar = document.getElementById('statusatualizar')
let atualizar = document.getElementById('atualizar')
let statusMostrar = document.getElementById('statusMostrar')
let deletar = document.getElementById('del')