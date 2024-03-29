// Cards (Carrosel)

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
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
        const newScrollLeft = startScrollLeft - (e.pageX - startX);
        if (newScrollLeft <= 0 || newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
            isDragging = false;
            return;
        }
        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
        if (window.innerWidth < 800) return;
        const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;
        if (carousel.scrollLeft >= maxScrollLeft) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
});
 



// Abre e fecha os cards e troca o icone de seta

function toggleCard(iconId, cardClass) {
    var icon = document.getElementById(iconId);
    var card = document.querySelector('.' + cardClass);

    icon.addEventListener('click', function() {
        card.classList.toggle('active');

        // Alterna entre as classes de ícone de seta dependendo do estado do cartão
        if (card.classList.contains('active')) {
            icon.classList.remove('bi-arrow-up-circle');
            icon.classList.add('bi-arrow-down-circle');
        } else {
            icon.classList.remove('bi-arrow-down-circle');
            icon.classList.add('bi-arrow-up-circle');
        }
    });
}

toggleCard('arrow', 'card');
toggleCard('arrow1', 'card1');
toggleCard('arrow2', 'card2');
toggleCard('arrow3', 'card3');




 



    