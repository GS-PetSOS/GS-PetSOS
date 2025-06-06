document.addEventListener("DOMContentLoaded", () => {
    const linkCadastro = document.getElementById("criar-cadastro");
    const usuarioLogado = localStorage.getItem("usuarioLogado");

    if (usuarioLogado === "true" && linkCadastro) {
        linkCadastro.href = "../pages-petsos/perfil.html"; // Altere para o link correto do perfil
        linkCadastro.querySelector("p").textContent = "Meu perfil";
    }
});