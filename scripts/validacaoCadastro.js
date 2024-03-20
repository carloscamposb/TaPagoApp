const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("password");
const senhaConfirme = document.getElementById("passwordConfirmation");

form.addEventListener("submit", (event) =>{
    event.preventDefault();


    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();


// função que verifica cada input
    checkForm(); 
    
   
// ;

} )


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
        errorInput(passwordConfirmation, "Requer confirmação de senha")
    }else if(passwordConfirmationValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas são diferentes")
    }else{
        const formItem= passwordConfirmation.parentElement;
        formItem.className="input-box"
    }
    
     
   
}



// funcão para inibir envio quando houver erros no cadastro

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems=form.querySelectorAll(".input-box")
    
    // array para verificação. Every verifica se toda a array passa na condição imposta
    const isValid = [...formItems].every((item)=>{
        return item.className === "input-box"

    }); 
    
    if(isValid){
        alert('Cadastro realizado com sucesso!')

        window.location.href = "index.html"
    }
}







// função do erro
function errorInput(input,message){
    const formItem=input.parentElement;
    const textMessage=formItem.querySelector("a")

    textMessage.innerText=message;

    formItem.className = "input-box error"

}





