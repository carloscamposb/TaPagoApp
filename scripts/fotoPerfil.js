document.addEventListener('DOMContentLoaded', function () {
    const cameraIcon = document.getElementById('camera');
    const fileInput = document.getElementById('file-upload');
    const profileImage = document.getElementById('profileImage');

    cameraIcon.addEventListener('click', function () {
        fileInput.click(); // Abrir o diálogo de seleção de arquivo
    });

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                const imageData = reader.result; // Dados da imagem
                profileImage.src = imageData; // Atualizar a imagem de perfil
                // Salvar o URL da nova imagem no armazenamento local (localStorage)
                localStorage.setItem('profileImage', imageData);
            };
            reader.readAsDataURL(file); // Ler o arquivo como um Data URL
        }
    });

    // Verificar se existe uma imagem armazenada no localStorage
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
        profileImage.src = storedImage; // Atualizar a imagem de perfil com a imagem armazenada
    }
});