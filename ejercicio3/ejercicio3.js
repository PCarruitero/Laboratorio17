try {
    console.log(noExiste); 
} catch (e) {
    console.log("falló");
} finally {
    console.log("siempre se ejecuta");
}