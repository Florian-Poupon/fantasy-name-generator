//Random Number

function randomNbr(liste) {
  return liste[Math.floor(Math.random() * liste.length)];
}

//clic race
const raceClic = document.querySelectorAll(".raceBtn button");
const background = document.getElementById("background");

raceClic.forEach((button) => {
  button.addEventListener("click", () => {
    let race = button.getAttribute("data-race");

    //changer background
    if (!background) return;
    background?.classList.add("fade-out");
    void background.offsetWidth;
    setTimeout(() => {
      background.style.backgroundImage = `url('images/background/background-${race}.png')`;
      background.classList.remove("fade-out");
    }, 100);

    raceClic.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");
  });
});

//clic genre
const genreClic = document.querySelectorAll(".genreBtn button");

genreClic.forEach((button) => {
  button.addEventListener("click", () => {
    let genre = button.getAttribute("data-genre");
    genreClic.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");
  });
});

// création du nom
function generateName() {
  const raceChoice = document.querySelector(".raceBtn button.active");
  const genreChoice = document.querySelector(".genreBtn button.active");

  const raceData = raceChoice?.getAttribute("data-race");
  const genreData = genreChoice?.getAttribute("data-genre");

  let nom = "";

  if (raceData === "humain") {
    if (genreData === "masculin") {
      nom = randomNbr(prefixesHumainMasculin) + randomNbr(suffixesHumainMasculin);
    } else {
      nom = randomNbr(prefixesHumainFeminin) + randomNbr(suffixesHumainFeminin);
    }
  }
  if (raceData === "elfe") {
    if (genreData === "masculin") {
      nom = randomNbr(prefixesElfeMasculin) + randomNbr(suffixesElfeMasculin);
    } else {
      nom = randomNbr(prefixesElfeFeminin) + randomNbr(suffixesElfeFeminin);
    }
  }
  if (raceData === "nain") {
    if (genreData === "masculin") {
      nom = randomNbr(prefixesNainMasculin) + randomNbr(suffixesNainMasculin);
    } else {
      nom = randomNbr(prefixesNainFeminin) + randomNbr(suffixesNainFeminin);
    }
  }
  if (raceData === "gnome") {
    if (genreData === "masculin") {
      nom = randomNbr(prefixesGnomeMasculin) + randomNbr(suffixesGnomeMasculin);
    } else {
      nom = randomNbr(prefixesGnomeFeminin) + randomNbr(suffixesGnomeFeminin);
    }
  }
  if (raceData === "orc") {
    if (genreData === "masculin") {
      nom = randomNbr(prefixesOrcMasculin) + randomNbr(suffixesOrcMasculin);
    } else {
      nom = randomNbr(prefixesOrcFeminin) + randomNbr(suffixesOrcFeminin);
    }
  }
  return nom;
}

//Afficher le nom

function afficherNom() {
  let generateBtn = document.querySelector(".generateBtn button");
  generateBtn?.addEventListener("click", () => {
    let monNom = generateName();

    const yourName = document.querySelector(".yourName p");
    if (!yourName) return;
    yourName.textContent = `Votre nom est : "${monNom}"`;
  });
}

afficherNom();
