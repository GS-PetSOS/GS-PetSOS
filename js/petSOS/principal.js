document.addEventListener("DOMContentLoaded", () => {
    const linkCadastro = document.getElementById("criar-cadastro");
    const usuarios = localStorage.getItem("usuarios");

    if (usuarios === "true" && linkCadastro) {
        linkCadastro.href = "../pages-petsos/perfil.html"; // Altere para o link correto do perfil
        linkCadastro.querySelector("p").textContent = "Meu perfil";
    }
});