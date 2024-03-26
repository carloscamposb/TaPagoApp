const abrirModal = document.querySelector('#abrirModal');
const modal= document.querySelector('#modal');
const closeButton=document.querySelector('#closeButton');
const backAdd=document.querySelector('#backAdd');
const editButton=document.querySelector('#editButton');


abrirModal.addEventListener('click', () =>{
    modal.showModal();
})


closeButton.addEventListener('click', () =>{
    modal.close();
    
    window.location.href = "home.html";
})



backAdd.addEventListener('click', () =>{
    modal.close();
    
    window.location.href = "adicionar.html";
})


editButton.addEventListener('click', () =>{
    modal.close();
    window.location.href = "configAdicao.html";
})