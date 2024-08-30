// Definerer en konstant "superhelte" som er en array af objekter
const superhelte = [
  {
    // Navn på superhelten
    navn: "SuperDuper",
    // Alder på superhelten
    alder: 30,
    // Beskæftigelse på superhelten
    beskæftigelse: "Superhelt",
    // Superkræfter som superhelten har
    superkraft: ["Superstærk", " Hurtigt", " Piv godt syn"],
    // Billede af superhelten
    billede: "Ladybug.webp",
  },
  {
    navn: "SuperKaj",
    alder: 20,
    beskæftigelse: "Superhelt",
    superkraft: ["Superstærk", " Langsom", " Piv godt syn"],
    billede: "Ladybug.webp",
  },
  {
    navn: "SuperNice",
    alder: 25,
    beskæftigelse: "Superhelt",
    superkraft: ["Superstærk", " Mellem ting", " Piv godt syn"],
    billede: "Ladybug.webp",
  },
];
// Definerer en konstant "helteListe" som er en reference til en HTML-template
const helteListe = document.querySelector("#superhelteTemplate").content;

// Kører funktionen "visSuperhelte" på hver objekt i "superhelte"-arrayet
superhelte.forEach(visSuperhelte);

// Funktionen "visSuperhelte" som viser en superhelt
function visSuperhelte(superhelt) {
  // Logger superhelten til konsollen
  console.log(superhelt);

  // Kloner HTML-templaten
  const klon = helteListe.cloneNode(true);

  // Sætter navn på superhelten i klonen
  klon.querySelector("h1").textContent = superhelt.navn;
  // Sætter alder på superhelten i klonen
  klon.querySelector("h2").textContent = superhelt.alder;
  // Sætter superkræfter på superhelten i klonen
  klon.querySelector("p").textContent = superhelt.superkraft;
  // Sætter superkræfter på superhelten i klonen (fejl i original koden, da "superkrafter" ikke er defineret)
  klon.querySelector("div").textContent = superhelt.superkrafter;
  // Sætter billede på superhelten i klonen
  klon.querySelector("img").src = "Ladybug.webp";

  // Definerer en konstant "beholder" som er en reference til HTML-elementet "body"
  const beholder = document.querySelector("body");
  // Tilføjer klonen til "beholder"-elementet
  beholder.appendChild(klon);
}
