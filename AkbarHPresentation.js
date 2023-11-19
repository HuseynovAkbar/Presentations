let pack1 = document.querySelector(".packing1");
let pack2 = document.querySelector(".packing2");
let mock1 = document.querySelector(".mockup1");
let mock2 = document.querySelector(".mockup2");
let typographyJs = document.querySelector(".typographyforjs");
let photographyJs = document.querySelector(".photographyforjs");


let btnPackaging = document.querySelector(".Packaging");
let btnAll = document.querySelector(".All");
let btnMokcup = document.querySelector(".Mockup");
let btntypeg = document.querySelector(".Typography")
let btnphoto = document.querySelector(".Photography")


btnPackaging.addEventListener("click", () => {
    btnPackaging.style.color = "#bac964"
    btnAll.style.color = "rgba(255, 255, 255, 0.4)"
    btnMokcup.style.color = "rgba(255, 255, 255, 0.4)"
    btntypeg.style.color = "rgba(255, 255, 255, 0.4)"
    btnphoto.style.color = "rgba(255, 255, 255, 0.4)"

    pack1.style.display = "block"
    pack2.style.display = "block"

    pack1.style.opacity = "1"
    pack2.style.opacity = "1"

    pack1.style.visibility = "visible"
    pack2.style.visibility = "visible"


    typographyJs.style.visibility = "hidden"
    photographyJs.style.visibility = "hidden"
    mock1.style.visibility = "hidden"
    mock2.style.visibility = "hidden"

    typographyJs.style.opacity = "0"
    photographyJs.style.opacity = "0"
    mock1.style.opacity = "0"
    mock2.style.opacity = "0"

    typographyJs.style.display = "none"
    photographyJs.style.display = "none"
    mock1.style.display = "none"
    mock2.style.display = "none"

})

btnAll.addEventListener("click", () => {
    btnAll.style.color = "#bac964"
    btnPackaging.style.color = "rgba(255, 255, 255, 0.4)"
    btnMokcup.style.color = "rgba(255, 255, 255, 0.4)"
    btntypeg.style.color = "rgba(255, 255, 255, 0.4)"
    btnphoto.style.color = "rgba(255, 255, 255, 0.4)"


    typographyJs.style.visibility = "visible"
    photographyJs.style.visibility = "visible"
    mock1.style.visibility = "visible"
    mock2.style.visibility = "visible"
    pack1.style.visibility = "visible"
    pack2.style.visibility = "visible"

    typographyJs.style.opacity = "1"
    photographyJs.style.opacity = "1"
    mock1.style.opacity = "1"
    mock2.style.opacity = "1"
    pack1.style.opacity = "1"
    pack2.style.opacity = "1"

    typographyJs.style.display = "block"
    photographyJs.style.display = "block"
    mock1.style.display = "block"
    mock2.style.display = "block"
    pack1.style.display = "block"
    pack2.style.display = "block"

})




btnMokcup.addEventListener("click", () => {
    btnMokcup.style.color = "#bac964"
    btnAll.style.color = "rgba(255, 255, 255, 0.4)"
    btnPackaging.style.color = "rgba(255, 255, 255, 0.4)"
    btntypeg.style.color = "rgba(255, 255, 255, 0.4)"
    btnphoto.style.color = "rgba(255, 255, 255, 0.4)"



    mock1.style.display = "block"
    mock2.style.display = "block"

    mock1.style.opacity = "1"
    mock2.style.opacity = "1"

    mock1.style.visibility = "visible"
    mock2.style.visibility = "visible"


    typographyJs.style.visibility = "hidden"
    photographyJs.style.visibility = "hidden"
    pack1.style.visibility = "hidden"
    pack2.style.visibility = "hidden"

    typographyJs.style.opacity = "0"
    photographyJs.style.opacity = "0"
    pack1.style.opacity = "0"
    pack2.style.opacity = "0"

    typographyJs.style.display = "none"
    photographyJs.style.display = "none"
    pack1.style.display = "none"
    pack2.style.display = "none"




})






btntypeg.addEventListener("click", () => {
    btntypeg.style.color = "#bac964"
    btnphoto.style.color = "rgba(255, 255, 255, 0.4)"
    btnAll.style.color = "rgba(255, 255, 255, 0.4)"
    btnPackaging.style.color = "rgba(255, 255, 255, 0.4)"
    btnMokcup.style.color = "rgba(255, 255, 255, 0.4)"


    typographyJs.style.display = "block"
    typographyJs.style.opacity = "1"
    typographyJs.style.visibility = "visible"


    photographyJs.style.visibility = "hidden"
    pack1.style.visibility = "hidden"
    pack2.style.visibility = "hidden"

    photographyJs.style.opacity = "0"
    pack1.style.opacity = "0"
    pack2.style.opacity = "0"

    photographyJs.style.display = "none"
    pack1.style.display = "none"
    pack2.style.display = "none"




    mock1.style.display = "none"
    mock2.style.display = "none"
    mock1.style.opacity = "0"
    mock2.style.opacity = "0"
    mock1.style.visibility = "hidden"
    mock2.style.visibility = "hidden"
})





btnphoto.addEventListener("click", () => {
    btnphoto.style.color = "#bac964"
    btnAll.style.color = "rgba(255, 255, 255, 0.4)"
    btnPackaging.style.color = "rgba(255, 255, 255, 0.4)"
    btnMokcup.style.color = "rgba(255, 255, 255, 0.4)"
    btntypeg.style.color = "rgba(255, 255, 255, 0.4)"


    photographyJs.style.display = "block"
    photographyJs.style.opacity = "1"
    photographyJs.style.visibility = "visible"


    typographyJs.style.visibility = "hidden"
    pack1.style.visibility = "hidden"
    pack2.style.visibility = "hidden"

    typographyJs.style.opacity = "0"
    pack1.style.opacity = "0"
    pack2.style.opacity = "0"

    typographyJs.style.display = "none"
    pack1.style.display = "none"
    pack2.style.display = "none"




    mock1.style.display = "none"
    mock2.style.display = "none"
    mock1.style.opacity = "0"
    mock2.style.opacity = "0"
    mock1.style.visibility = "hidden"
    mock2.style.visibility = "hidden"
})