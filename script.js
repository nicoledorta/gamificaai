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