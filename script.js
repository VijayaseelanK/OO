// Récupérer les éléments nécessaires
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const mainContent = document.getElementById('main-content');

// Ajouter un événement pour le bouton
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});
