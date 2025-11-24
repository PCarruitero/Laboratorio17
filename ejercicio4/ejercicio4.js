function validarEdad(edad) {
    if (isNaN(edad) || edad < 0) {
        throw new Error("Edad inválida");
    }
    return edad;
}
try {
    validarEdad(-1);
} catch (e) {
    document.body.innerHTML = e.message;
}