document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const navLinks = navbarMenu.querySelectorAll('a'); // Seleziona tutti i link nel menu

    if (toggleButton && navbarMenu) {
        toggleButton.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
            toggleButton.classList.toggle('open'); // Aggiunge la classe per l'animazione
        });

        // Chiude il menu dopo aver cliccato su un link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('active');
                toggleButton.classList.remove('open'); // Rimuove l'animazione quando il menu si chiude
            });
        });

        // Chiude il menu se si clicca fuori dalla navbar
        document.addEventListener('click', function(event) {
            if (!navbarMenu.contains(event.target) && !toggleButton.contains(event.target)) {
                navbarMenu.classList.remove('active');
                toggleButton.classList.remove('open'); // Rimuove l'animazione quando il menu si chiude
            }
        });
    }
});
