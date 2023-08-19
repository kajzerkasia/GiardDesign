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

    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    const updateButtonState = () => {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === slides.length - 1;
    };

    const updateSlider = () => {
        const offset = currentIndex * -100;
        slider.style.transform = `translateX(${offset}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
        updateButtonState();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
        updateButtonState();
    };

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    updateButtonState();

    const masonryContainer = document.getElementById("masonry-container");
    const masonry = new Masonry(masonryContainer, {
        itemSelector: '.item',
        columnWidth: '.item',
        gutter: 44
    });

    const expandButton = document.getElementById("expand-button");
    const mainGradient = document.getElementById("main-gradient");
    const hiddenItemsContainer = document.querySelector(".hidden-items-container");
    const collapseButton = document.getElementById("collapse-button");

    expandButton.addEventListener("click", () => {
        mainGradient.style.opacity = "0";
        expandButton.style.display = "none";
        hiddenItemsContainer.style.display = "block";
        collapseButton.style.display = "flex";

        const masonryContainerExpanded = new Masonry(hiddenItemsContainer, {
            itemSelector: '.item',
            columnWidth: '.item',
            gutter: 44
        });
    });

    collapseButton.addEventListener("click", function () {
        hiddenItemsContainer.style.display = "none";
        collapseButton.style.display = "none";
        expandButton.style.display = "flex";
        mainGradient.style.opacity = "1";
    });
});