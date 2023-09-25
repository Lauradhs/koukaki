window.onload = () => {
  // Récupérez la vidéo
  const video = document.querySelector(".banner__video");

  // Démarrez la vidéo
  video.play();

  // Masquer la vidéo au chargement de la page
  video.style.display = "block";

  const handleIntersect = (entries) => {
    entries.forEach(function (entry) {
      // Contrôle si l'élément à observer
      // est dans le ratio de la zone qui est affichée
      if (entry.intersectionRatio > ratio) {
        elementName = entry.target.className;

        // Si on trouve l'élément indiqué, on active l'animation d'apparition
        if (
          elementName === "banner__background hidden" ||
          elementName === "story hidden" ||
          elementName === "place hidden" ||
          elementName === "main-character hidden" ||
          elementName === "studio hidden" ||
          elementName === "nomination hidden" ||
          elementName === "site-footer hidden"
        ) {
          // On valide la class qui va executer le keyframes d'apparition des sections
          entry.target.classList.add("fade-in");
          // On arrête l'observation sur cet élément
          observer.unobserve(entry.target);
          // On retire la class qui cachait par défaut l'élement
          entry.target.classList.remove("hidden");
        }

        if (
          elementName === "story__title slide1 hidden" ||
          elementName === "studio__title slide1 hidden" ||
          elementName === "studio__title slide2 hidden" ||
          elementName === "characters__title hidden" ||
          elementName === "place__title slide1 hidden"
        ) {
          entry.target.classList.add("animatedTitle");
          observer.unobserve(entry.target);
          entry.target.classList.remove("hidden");
        }
      }
    });
  };

  const ratio = 0.07;
  // Initialisation de l'option pour la fonction IntersectionObserver
  // ratio : % qui doit être visible de l'élement avant de déclencher l'action
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
  };

  // https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
  //  Initialisation de la fonction IntersectionObserver
  const observer = new IntersectionObserver(handleIntersect, options);

  // Activation des éléments que l'on va surveiller
  observer.observe(document.querySelector(".story"));
  observer.observe(document.querySelector(".studio"));
  observer.observe(document.querySelector(".main-character"));
  observer.observe(document.querySelector(".nomination"));
  observer.observe(document.querySelector(".place"));
  observer.observe(document.querySelector(".site-footer"));
  observer.observe(document.querySelector(".story__title"));
  observer.observe(document.querySelector(".characters__title"));
  observer.observe(document.querySelector(".place__title"));
  observer.observe(document.querySelector(".studio__title"));
  observer.observe(document.querySelector(".slide2"));
};

// Contrôle si on scroll sur la fenêtre
window.addEventListener("scroll", () => {
  // Récupérer la racine de la page (élément :root)
  const root = document.documentElement;

  // Si on scroll, cela accélère la rotation des fleurs
  var vertical = -1;
  setInterval(function () {
    if (window.scrollY != vertical) {
      vertical = window.scrollY;
      root.style.setProperty("--rotate", "3s");
    } else {
      root.style.setProperty("--rotate", "15s");
    }
  }, 500);
});

// Effet parallax vidéo et logo

window.addEventListener('scroll', function () {
  const parallaxBack = document.querySelector('.parallax'); // Utilisez querySelector pour sélectionner un élément unique
  const scrollValue = window.scrollY;
  parallaxBack.style.transform = `translateY(${scrollValue * 0.5}px)`;
  
});



// swiper

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  loop: true,
  autoplay: {
    delay: 2500,
  },
  slidesPerView: "3", // Afficher le nombre d'images souhaité dans le conteneur
  centeredSlides: true, // Centrer les slides
  coverflowEffect: {
    rotate: 50, // Angle de rotation des slides
    stretch: 0, // Espacement entre les slides
    depth: 100, // Profondeur de l'effet de rotation
    modifier: 1, // Facteur de modification de la distance entre les slides
    slideShadows: false, // Afficher ou non les ombres des slides
  },
});

// nuage
// On bouge les 2 nuages en fonction du scroll

window.addEventListener("scroll", function () {
  let posX = Math.round(0 - (window.scrollY - place.offsetTop - 200));
  if (posX <= 0 && posX > -400) {
    document.documentElement.style.setProperty("--posX", posX + "px");
  }
});

// Gestion de la fermeture et de l'ouverture de la modale
document.addEventListener("DOMContentLoaded", function () {
  const modalOpenButtons = document.querySelectorAll(".modal-open");
  const modalContent = document.querySelector(".modal__content");
  const modalBurger = document.querySelector(".modal__burger");

  // Masquer la modal au démarrage
  modalContent.style.maxHeight = "0";
  modalContent.style.opacity = "0";
  modalContent.classList.add("menu-hidden");

  modalOpenButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleModal();
    });
  });

  document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (modalContent.classList.contains("open")) {
        toggleModal();
      }
    });
  });

  function toggleModal() {
    if (modalContent.classList.contains("open")) {
      modalContent.style.maxHeight = "0";
      modalContent.style.opacity = "0";
      modalContent.classList.add("menu-hidden");
    } else {
      modalContent.style.maxHeight = "none";
      modalContent.style.opacity = "1";
      modalContent.classList.remove("menu-hidden");
    }
    modalContent.classList.toggle("open");
    modalBurger.classList.toggle("close");
  }
});
