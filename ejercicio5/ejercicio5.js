try {
    let x = null;
    x.nombre;
} catch (e) {
    if (e instanceof TypeError) {
        document.body.innerHTML = "Se produjo un TypeError";
    } else {
        document.body.innerHTML = "Otro error";
    }
}