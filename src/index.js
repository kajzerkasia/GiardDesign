document.addEventListener('DOMContentLoaded', () => {
    const toggleSearch = document.getElementById('toggleSearch');
    const searchBox = document.getElementById('searchBox');

    toggleSearch.addEventListener('click', e => {
        e.preventDefault();
        searchBox.classList.toggle('hidden');
        searchBox.classList.toggle('opacity-100');
        searchBox.classList.toggle('scale-100');

        // Dodaj klasę "rotate" po kliknięciu w lupkę
        toggleSearch.classList.add('rotate');

        // Usuń klasę "rotate" po zakończeniu animacji
        toggleSearch.addEventListener('animationend', () => {
            toggleSearch.classList.remove('rotate');
        }, {once: true}); // { once: true } aby nasłuchiwanie wydarzenia zakończyło się po jednym wystąpieniu
    });

    const offerLink = document.querySelector(".dropdown-link");
    const arrowDown = document.querySelector(".click-rotate-180");
    const dropdownContent = document.querySelector(".dropdown-content");

    offerLink.addEventListener("click", event => {
        event.preventDefault();
        dropdownContent.classList.toggle("hidden");
        dropdownContent.classList.toggle('opacity-100');
        dropdownContent.classList.toggle('scale-100');
        arrowDown.classList.toggle("active");
    });
});