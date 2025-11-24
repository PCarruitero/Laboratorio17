try {
    let texto = "{nombre: Juan}";
    JSON.parse(texto);
} catch (e) {
    document.body.innerHTML = `${e.name}: ${e.message}`;
}