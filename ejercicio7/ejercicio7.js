function cargarMensaje(callback) {
    setTimeout(() => {
        callback("Mensaje cargado");
    }, 1000);
}
cargarMensaje(m => {
    document.body.innerHTML = m;
});