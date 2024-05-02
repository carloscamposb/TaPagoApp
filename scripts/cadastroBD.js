document.getElementById('abrirModal').addEventListener('click', function() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirmation = document.getElementById("passwordConfirmation").value;

    // Verifica se todos os campos estão preenchidos
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || passwordConfirmation.trim() === '') {
        return; // Impede o envio dos dados se algum campo estiver vazio
    }

    const formData = {
        username: username,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation
    };

    fetch('http://localhost:3000/cadastro/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        openModal();
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
    });
});

function openModal() {
    const modal = document.getElementById('modal');
    modal.showModal();
}

document.getElementById('closeButton').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.close();
});