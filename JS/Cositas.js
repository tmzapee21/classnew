

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Vuelve :c";
})

window, addEventListener("focus", () => {
    document.title = docTitle;
})

//Modal 

//const btnAbrirModal = document.querySelector("#bton1");

//const btnCerrarModal = document.querySelector("#cerrar");

//const modal = document.querySelector("#Ventana1");

//btnAbrirModal.addEventListener("click",()=>{
//    modal.showModal();
//})
//
//btnAbrirModal.addEventListener("click",()=>{
//    modal.close();
//})


