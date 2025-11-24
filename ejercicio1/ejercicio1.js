try {
    let r = x + 5;
} catch (e) {
    document.getElementById("resultado").textContent = e.message;
}