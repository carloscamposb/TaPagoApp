//password
function showing(){
    var inputPass=document.getElementById('senha');
    var btnShowPass = document.getElementById('btnSenha');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type' , 'text');
        btnShowPass.classList.replace ('bi-eye' , 'bi-eye-slash' )
    }else{
        inputPass.setAttribute('type' , 'password');
        btnShowPass.classList.replace ('bi-eye-slash','bi-eye')
    }

}




// Olhos icone senha 
function showingConfirm(){
    var inputPassConfirm=document.getElementById('senha2');
    var btnShowPassConfirm = document.getElementById('btnSenha2');

    if(inputPassConfirm.type === 'password'){
        inputPassConfirm.setAttribute('type' , 'text');
        btnShowPassConfirm.classList.replace ('bi-eye' , 'bi-eye-slash' )
    }else{
        inputPassConfirm.setAttribute('type' , 'password');
        btnShowPassConfirm.classList.replace ('bi-eye-slash','bi-eye')
    }

}



