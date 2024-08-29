const superhelt = {
  navn: "SuperDuper",
  alder: 30,
  beskæftigelse: "Superhelt",
  superkraft: ["Superstærk", " Hurtigt", " Piv godt syn"],
  billede: "Ladybug.webp",
};
const artikel = document.querySelector("article");
console.log(artikel);
artikel.querySelector("h1").textContent = superhelt.navn;
artikel.querySelector("h2").textContent = superhelt.alder;
artikel.querySelector("p").textContent = superhelt.superkraft;

// console.log(superhelt.navn);
// console.log(superhelt.alder);
// console.log(superhelt.beskæftigelse);
// console.log(superhelt.superkraft);
// const besked = "Din superhelt er ${superhelt.navn}";

// const superkraft = "Din superkraft er ${superhelt.superkraft[2]}";
