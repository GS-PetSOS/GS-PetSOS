const inputFoto = document.getElementById('idFoto');
const imgbnt = document.getElementById('imgbnt');
const adcFoto = document.getElementById('adcFoto');
const previewFoto = document.getElementById('previewFoto');
const btnfoto = document.getElementById('btnfoto');

inputFoto.addEventListener('change', function() {
    const arquivo = this.files[0];
    if (arquivo) {
        const url = URL.createObjectURL(arquivo);
        previewFoto.src = url;
        previewFoto.style.display = 'block';

        // Oculta o conteúdo do botão (ícone e texto)
        imgbnt.style.display = 'none';
        adcFoto.style.display = 'none';
        //tira o padding da area de adcionar foto
        btnfoto.setAttribute('style', 'padding: 0');
    }
});

function cadastrar(event) {
    event.preventDefault();

    // ...validações e envio

    // Simula cadastro bem-sucedido
    localStorage.setItem("usuarioLogado", "true");

    // Redireciona para a página principal
    window.location.href = "../pages-petsos/principal.html";
}