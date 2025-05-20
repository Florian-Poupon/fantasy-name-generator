//Races

const listeRaces = ["humain", "nain", "elfe", "gnome", "orc"];
const listeSexe = ["homme", "femme"];

//noms Humains/Humaines

const prefixesHumainMasculin = ["Alar", "Bren", "Cal", "Dar", "Gar", "Hal", "Jan", "Mal", "Ron", "Tiber"];
const suffixesHumainMasculin = ["dor", "an", "ius", "ar", "en", "us", "ton", "ald", "eric", "vin"];

const prefixesHumainFeminin = ["Elen", "Mara", "Lysa", "Calia", "Jena", "Sora", "Alia", "Mira", "Talia", "Rina"];
const suffixesHumainFeminin = ["elle", "ana", "ia", "ine", "essa", "aria", "yne", "etta", "ora"];

// noms Nains

const prefixesNainMasculin = ["Bal", "Dain", "Thor", "Grum", "Dur", "Kaz", "Thrain", "Brok", "Grom", "Fund"];
const suffixesNainMasculin = ["in", "son", "dar", "grim", "or", "rek", "mund", "ogrin", "nor"];

const prefixesNainFeminin = ["Brunna", "Gilda", "Katra", "Thora", "Gunna", "Frida", "Helga", "Dorga", "Morna", "Vilda"];
const suffixesNainFeminin = ["la", "ina", "gna", "lda", "hild", "mara", "runa", "vara", "nys"];

// noms Elfes

const prefixesElfeMasculin = ["Ael", "Eri", "Luth", "Syl", "Thael", "Faer", "Ille", "Cael", "Ven"];
const suffixesElfeMasculin = ["rion", "thas", "nor", "las", "enor", "adel", "mir", "aran"];

const prefixesElfeFeminin = ["Aelya", "Lúria", "Seris", "Elira", "Yllia", "Naeva", "Thelya", "Valya", "Shae"];
const suffixesElfeFeminin = ["wyn", "riel", "thiel", "loth", "enna", "aria", "ora", "ael"];

// noms Ors

const prefixesOrcMasculin = ["Grok", "Urg", "Krag", "Mok", "Thok", "Grol", "Zuk", "Brak", "Krog"];
const suffixesOrcMasculin = ["mak", "zug", "thrak", "nok", "dur", "argh", "um", "nog", "zul"];

const prefixesOrcFeminin = ["Grolka", "Sharga", "Ugra", "Zorga", "Krasha", "Vorka", "Draga", "Brulka", "Zunra"];
const suffixesOrcFeminin = ["akha", "gra", "orra", "uka", "zha", "nasha", "vra", "zra", "sha"];

// noms Gnomes

const prefixesGnomeMasculin = ["Fiz", "Bim", "Nix", "Gim", "Wob", "Zib", "Pim", "Rix"];
const suffixesGnomeMasculin = ["wick", "bork", "tix", "oddle", "dibble", "bop", "frick", "nix"];

const prefixesGnomeFeminin = ["Pippa", "Zilly", "Tinka", "Lolla", "Minna", "Zuna", "Gilly", "Dotti", "Brilla"];
const suffixesGnomeFeminin = ["ybelle", "tinka", "lilla", "opple", "dora", "mella", "bitta", "wina", "zetta"];

/////////////////////Random Number

function randomNbr(liste) {
  return liste[Math.floor(Math.random() * liste.length)];
}

// Choix de Races
function choixDeLaRace() {
  let RaceChoisie = prompt("Choisissez votre race !");
  if (RaceChoisie !== null) {
    RaceChoisie = RaceChoisie.toLowerCase().trim();
  }
  while (!listeRaces.includes(RaceChoisie)) {
    RaceChoisie = prompt("Choisissez votre race !");
  }
  return RaceChoisie;
}

// Choix du sexe

function choixDuSexe() {
  let sexeChoisie = prompt("Choisissez votre sexe !");
  if (sexeChoisie !== null) {
    sexeChoisie = sexeChoisie.toLowerCase().trim();
  }
  while (!listeSexe.includes(sexeChoisie)) {
    sexeChoisie = prompt("Choisissez votre race !");
  }
  return sexeChoisie;
}

// génération du nom
function generateName() {
  const race = choixDeLaRace();
  const sexe = choixDuSexe();
  let nom = "";

  switch (race) {
    case "humain":
      if (sexe === "homme") {
        nom = randomNbr(prefixesHumainMasculin) + randomNbr(suffixesHumainMasculin);
      } else {
        nom = randomNbr(prefixesHumainFeminin) + randomNbr(suffixesHumainFeminin);
      }
      break;
    case "nain":
      if (sexe === "homme") {
        nom = randomNbr(prefixesNainMasculin) + randomNbr(suffixesNainMasculin);
      } else {
        nom = randomNbr(prefixesNainFeminin) + randomNbr(suffixesNainFeminin);
      }
      break;
    case "elfe":
      if (sexe === "homme") {
        nom = randomNbr(prefixesElfeMasculin) + randomNbr(suffixesElfeMasculin);
      } else {
        nom = randomNbr(prefixesElfeFeminin) + randomNbr(suffixesElfeFeminin);
      }
      break;
    case "orc":
      if (sexe === "homme") {
        nom = randomNbr(prefixesOrcMasculin) + randomNbr(suffixesOrcMasculin);
      } else {
        nom = randomNbr(prefixesOrcFeminin) + randomNbr(suffixesOrcFeminin);
      }
      break;
    case "gnome":
      if (sexe === "homme") {
        nom = randomNbr(prefixesGnomeMasculin) + randomNbr(suffixesGnomeMasculin);
      } else {
        nom = randomNbr(prefixesGnomeFeminin) + randomNbr(suffixesGnomeFeminin);
      }
      break;
  }
  return nom;
}

// const monNom = generateName();
// console.log(monNom);

//clic race
