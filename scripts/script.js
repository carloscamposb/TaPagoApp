
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





// Menu hamburguer

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
hamburguer.addEventListener("click",()=> nav.classList.toggle("active"));




// checkbox

document.addEventListener("DOMContentLoaded", function() {
    var checkboxes = document.querySelectorAll('.checkbox');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            checkboxes.forEach(function(cb) {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });
        });
    });
});



// CARDS

document.addEventListener("DOMContentLoaded", function() { 
    const carousel = document.querySelector(".carousel"); 
    const arrowBtns = document.querySelectorAll(".wrapper i"); 
    const wrapper = document.querySelector(".wrapper"); 
  
    const firstCard = carousel.querySelector(".card"); 
    const firstCardWidth = firstCard.offsetWidth; 
  
    let isDragging = false, 
        startX, 
        startScrollLeft, 
        timeoutId; 
  
    const dragStart = (e) => {  
        isDragging = true; 
        carousel.classList.add("dragging"); 
        startX = e.pageX; 
        startScrollLeft = carousel.scrollLeft; 
    }; 
  
    const dragging = (e) => { 
        if (!isDragging) return; 
      
        // Calculate the new scroll position 
        const newScrollLeft = startScrollLeft - (e.pageX - startX); 
      
        // Check if the new scroll position exceeds  
        // the carousel boundaries 
        if (newScrollLeft <= 0 || newScrollLeft >=  
            carousel.scrollWidth - carousel.offsetWidth) { 
              
            // If so, prevent further dragging 
            isDragging = false; 
            return; 
        } 
      
        // Otherwise, update the scroll position of the carousel 
        carousel.scrollLeft = newScrollLeft; 
    }; 
  
    const dragStop = () => { 
        isDragging = false;  
        carousel.classList.remove("dragging"); 
    }; 
  
    const autoPlay = () => { 
      
        // Return if window is smaller than 800 
        if (window.innerWidth < 800) return;  
          
        // Calculate the total width of all cards 
        const totalCardWidth = carousel.scrollWidth; 
          
        // Calculate the maximum scroll position 
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
          
        // If the carousel is at the end, stop autoplay 
        if (carousel.scrollLeft >= maxScrollLeft) return; 
          
        // Autoplay the carousel after every 2500ms 
        timeoutId = setTimeout(() =>  
            carousel.scrollLeft += firstCardWidth, 2500); 
    }; 
  
    carousel.addEventListener("mousedown", dragStart); 
    carousel.addEventListener("mousemove", dragging); 
    document.addEventListener("mouseup", dragStop); 
    wrapper.addEventListener("mouseenter", () =>  
        clearTimeout(timeoutId)); 
    wrapper.addEventListener("mouseleave", autoPlay); 
  
  
    });; 
 
    // Abrir e fechar cards



    var icon = document.getElementById('arrow');
    icon.addEventListener('click', function(){
        var card = document.querySelector('.card');
        card.classList.toggle('active');
    });


   var icon1= document.getElementById('arrow1');
   icon1.addEventListener('click',function(){
        var card1=document.querySelector('.card1');
        card1.classList.toggle('active');
   });


   var icon2= document.getElementById('arrow2');
   icon2.addEventListener('click',function(){
        var card2=document.querySelector('.card2');
        card2.classList.toggle('active');
   });


   var icon3= document.getElementById('arrow3');
   icon3.addEventListener('click',function(){
        var card3=document.querySelector('.card3');
        card3.classList.toggle('active');
   });


// Animação da setas

var iconPag = document.getElementById('arrowPag');
iconPag.addEventListener('click', function(){
    var atrasadasSection = document.querySelector('.atrasadasSection');
    card.classList.toggle('active');
});





