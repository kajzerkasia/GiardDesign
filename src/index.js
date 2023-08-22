import './styles.css';

document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const mobileMenuCollapseButton = document.getElementById("mobileMenuCollapseButton");
    const mobileMenu = document.getElementById("mobileMenu");

    mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    mobileMenuCollapseButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    const toggleSearch = document.getElementById('toggleSearch');
    const searchBox = document.getElementById('searchBox');

    toggleSearch.addEventListener('click', e => {
        e.preventDefault();
        searchBox.classList.toggle('hidden');
        searchBox.classList.toggle('opacity-100');
        searchBox.classList.toggle('scale-100');

        toggleSearch.classList.add('rotate');

        toggleSearch.addEventListener('animationend', () => {
            toggleSearch.classList.remove('rotate');
        }, {once: true});
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

    const offset = 200;

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
        hiddenItemsContainer.scrollIntoView({behavior: "smooth", block: "start"});
    });

    collapseButton.addEventListener("click", () => {
        hiddenItemsContainer.style.display = "none";
        collapseButton.style.display = "none";
        expandButton.style.display = "flex";
        mainGradient.style.opacity = "1";

        const lastItem = masonryContainer.lastElementChild;
        if (lastItem) {
            lastItem.scrollIntoView({behavior: "smooth", block: "end"});
        }
    });

    const images = document.querySelectorAll(".item img");
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");
    const modalBackground = document.getElementById("modal-background");
    const prevModalButton = document.getElementById("prev-modal-button");
    const nextModalButton = document.getElementById("next-modal-button");

    let currentImageIndex = 0;

    function updateModalImage(index) {
        modalImage.src = images[index].src;
        currentImageIndex = index;
    }

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
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

    prevModalButton.addEventListener("click", () => {
        handleNavigation(-1);
    });

    nextModalButton.addEventListener("click", () => {
        handleNavigation(1);
    });

    document.addEventListener("keydown", event => {
        if (modal.classList.contains("active")) {
            if (event.key === "ArrowLeft") {
                handleNavigation(-1);
            } else if (event.key === "ArrowRight") {
                handleNavigation(1);
            } else if (event.key === "Escape") {
                closeModalAndBackground();
            }
        }
    });

    function closeModalAndBackground() {
        modal.classList.remove("active");
        modalBackground.style.display = "none";
    }

    closeModal.addEventListener("click", closeModalAndBackground);

    modalBackground.addEventListener("click", closeModalAndBackground);

    const animatedSections = document.querySelectorAll('.animated-section');
    const animateBounceIndSections = document.querySelectorAll('.animated-bounce-in-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.2});

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    animateBounceIndSections.forEach(section => {
        observer.observe(section);
    })

    const searchInput = searchBox.querySelector("input");
    const searchResults = document.getElementById("searchResults");

    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase();
        const itemsToSearch = document.querySelectorAll(".item-to-search");

        searchResults.innerHTML = "";

        let matchingItems = [];

        itemsToSearch.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            if (itemText.includes(searchText)) {
                matchingItems.push(item);

                const resultItem = document.createElement("div");
                resultItem.classList.add("result-item");
                resultItem.textContent = itemText;

                resultItem.addEventListener("click", () => {
                    item.scrollIntoView({behavior: "smooth", block: "start"});
                    searchResults.style.display = "none";
                });

                searchResults.appendChild(resultItem);
            }
        });

        if (searchText.length > 0) {
            searchResults.style.display = "block";
        } else {
            searchResults.style.display = "none";
        }
    });

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            searchResults.style.display = "none";
        }
    });

});