let renders = Array.from(document.getElementsByClassName("imgCarousel"));

let morelos = document.getElementById("morelos");
let nombreRender = morelos.getAttribute("nombreRender");
updateCaption(nombreRender);

renders.forEach(function (render) {
    renders.addEventListener("click", updateImage);
});

function updateImage(event){
    let render = event.target;
    let name = render.getAttribute("name")

    morelos.src = render.src;
    updateCaption(name);
}

function updateCaption(event){
    let caption = document.getElementById("caption");
    caption.innerHTML=event;
}

