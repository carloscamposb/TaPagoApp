const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("password");
const senhaConfirme = document.getElementById("passwordConfirmation");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    // Verifica todos os campos antes de exibir o popup
    if (checkForm()) {
        modal.showModal();
    }
});

function checkInputUsername(){
    const usernameValue=username.value;

    if(usernameValue === ""){
        errorInput(username, "Preencha seu nome")
    }else{
        const formItem=username.parentElement;
        formItem.className="input-box"
    }
}

function checkInputEmail(){
    const emailValue=email.value;

    if(emailValue === ""){
        errorInput(email, "Preencha seu e-mail")
    }else{
        const formItem= email.parentElement;
        formItem.className="input-box"
    }
}

function checkInputPassword(){
    const passwordValue=password.value;
    
    if(passwordValue === ""){
        errorInput(password, "Digite uma senha")
    }else if(passwordValue.length < 5){
        errorInput(password, "Mínimo 5 caracteres")
    }else if(!/^[A-Z]/.test(passwordValue)){
        errorInput(password, "Primeiro caracter deve ser maiúsculo")
    }else {
        const formItem = senha.parentElement;
        formItem.className = "input-box";
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue=password.value;
    const passwordConfirmationValue =passwordConfirmation.value;

    if(passwordConfirmationValue === ""){
        errorInput(passwordConfirmation, "Confirme a senha")
    }else if(passwordConfirmationValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas são diferentes")
    }else{
        const formItem= passwordConfirmation.parentElement;
        formItem.className="input-box"
    }
}

// Verifica todos os campos do formulário
function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems=form.querySelectorAll(".input-box")
    
    // Verifica se todos os campos estão corretos
    const isValid = [...formItems].every((item)=>{
        return item.className === "input-box";
    }); 
    
    return isValid;
}

function errorInput(input,message){
    const formItem=input.parentElement;
    const textMessage=formItem.querySelector("a")

    textMessage.innerText=message;

    formItem.className = "input-box error";
}

// Fechar o popup
closeButton.addEventListener('click', () =>{
    modal.close();
    
    window.location.href = "index.html";
});











