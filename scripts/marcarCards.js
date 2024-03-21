// Selecione todos os elementos com a classe "groupPriority"
const cards = document.querySelectorAll('.groupPriority');

// Itere sobre cada card e adicione um event listener para o evento de clique
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remova a classe "active" de todos os cards
        cards.forEach(card => {
            card.classList.remove('active');
        });
        
        // Adicione a classe "active" apenas ao card clicado
        card.classList.add('active');
    });
});