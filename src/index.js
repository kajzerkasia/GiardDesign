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
        gutter: 43
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
            gutter: 43
        });
        hiddenItemsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    collapseButton.addEventListener("click", () => {
        hiddenItemsContainer.style.display = "none";
        collapseButton.style.display = "none";
        expandButton.style.display = "flex";
        mainGradient.style.opacity = "1";
    });

    const images = document.querySelectorAll(".item img");
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");
    const modalBackground = document.getElementById("modal-background");
    const prevModalButton = document.getElementById("prev-modal-button");
    const nextModalButton = document.getElementById("next-modal-button");

    let currentImageIndex = 0;

    // Funkcja do aktualizowania źródła obrazu w modalu
    function updateModalImage(index) {
        modalImage.src = images[index].src;
        currentImageIndex = index;
    }

    // Otwieranie popupa z klikniętego zdjęcia
    images.forEach((image, index) => {
        image.addEventListener("click", function () {
            updateModalImage(index);
            modal.classList.add("active");
            modalBackground.style.display = "block";
        });
    });

    function handleNavigation(direction) {
        let newIndex = currentImageIndex + direction;

        if (newIndex < 0) {
            newIndex = images.length - 1;
        } else if (newIndex >= images.length) {
            newIndex = 0;
        }

        updateModalImage(newIndex);
    }

    prevModalButton.addEventListener("click", function () {
        handleNavigation(-1);
    });

    nextModalButton.addEventListener("click", function () {
        handleNavigation(1);
    });

    function closeModalAndBackground() {
        modal.classList.remove("active");
        modalBackground.style.display = "none";
    }

    closeModal.addEventListener("click", closeModalAndBackground);

    modalBackground.addEventListener("click", closeModalAndBackground);
});