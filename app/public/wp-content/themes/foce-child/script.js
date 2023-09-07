window.onload = () => {
  // on crée l'obersver
  let observer = new IntersectionObserver(
    (observables) => {
      for (let observable of observables) {
        if (observable.intersectionRatio > 0.8) {
          observable.target.classList.remove("titlescroll");
        } else {
          observable.target.classList.add("titlescroll");
        }
      }
    },
    {
      threshold: [0.25, 0.5, 0.85],
    }
  ); // On récupère les titres

  const titres = document.querySelectorAll("span");
  for (let titre of titres) {
    titre.classList.add("titlescroll"); // on observe les titres
    observer.observe(titre);
  }
};
