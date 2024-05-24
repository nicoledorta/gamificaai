let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {

    // menu fechado - tem a classe menu-fechado
    // menu aberto - não tem a classe 

    if (menu.classList.contains("menu-fechado")) {
        // abrir o menu
        menu.classList.remove("menu-fechado")

        // mostrar icone barras
        iconeBarras.style.display = "none"

        // esconder o icone do x
        iconeX.style.display = "inline"
    }
    else {
        //fechar o menu
        menu.classList.add("menu-fechado")

        // mostrar o icone do x
        iconeX.style.display = "none"

        //esconder o icone de barras
        iconeBarras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")

    iconeBarras.style.display = "none"

    iconeX.style.display = "inline"
}

//carrossel

let banner = document.querySelector(".banner")

// let slides = [0, 1, 2, ...] -> array
// slides [0] -> primeiro-banner e assim por diante
let slides = [
    "primeiro-banner", //0
    "segundo-banner", // 1
    "terceiro-banner" //2
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {
    //remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {
        // somar 1 na variável slideAtual
        slideAtual++
    }
    else {
        //voltar para o primeiro banner
        slideAtual = 0
    }

    // mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}

function mostrarSlideAnterior() {
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        slideAtual--
    }
    else {
        slideAtual = 2
    }

    banner.classList.add(slides[slideAtual])
}

function selecionarSlide(indiceSlide) { //o indice deixa mais dinamico e facilita
    banner.classList.remove(slides[slideAtual])

    slideAtual = indiceSlide

    banner.classList.add(slides[slideAtual])
}


// carregamento dinamico dos cases de sucesso
// array porque é uma lista dos cases
let listaCases = [
    /*{
        imagem: "https://unsplash.it/600/400?image=76",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionários devem propor e implementar ideias inovadoras."
    },
    {
        imagem: "https://unsplash.it/600/400?image=23",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento."
    },
    {
        imagem: "https://unsplash.it/600/400?image=8",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking"
    },
    {
        imagem: "https://unsplash.it/600/400?image=15",
        descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento físico"
    }*/
]

function renderizarCases() {
    //encontrar o elemento para inserir os cards
    let containerCards = document.querySelector(".container-cards")

    // variável para guardar o html dos cases montados
    let template = ""

    //para cada case da lista listaCases
    listaCases.forEach(cardCase => {
        //montar o html do card, passando os atributos do case
        template += `<div class="card">
        <img src=${ cardCase.imagem } alt="">
        <p>${ cardCase.descricao }</p>
        <button>Ver mais</button>
    </div>`

    })

    //inserir html dos cases montados no elemento container-cards
    containerCards.innerHTML = template
}