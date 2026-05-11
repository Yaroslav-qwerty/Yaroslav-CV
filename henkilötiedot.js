console.log("henkilötiedot-sivu avattu");
let henkilot = [
  {
    name: "Merja Meikäläinen",
    age: 20,
    job: "Opiskelija",
    driversLicense: true
  },
  {
    name: "Teppo Teikäläinen",
    age: 25,
    job: "Sähköteknikko",
    driversLicense: true
  },
  {
    name: "Helena Heikkiläinen",
    age: 30,
    job: "Ohjelmistosuunnittelija",
    driversLicense: false
  },
  {
    name: "Semi Sikalainen",
    age: 18,
    job: "Opiskelija",
    driversLicense: false
  },
  {
    name: "Tomas Takaäläinen",
    age: 22,
    job: "Linja-autonkuljettaja",
    driversLicense: true
  }
];

function luoRivit() {
  let rivit = document.getElementById("rivit");
 
  rivit.innerHTML = "";

  henkilot.forEach(henkilo => {
    let tr = document.createElement("tr");

    let nimi = document.createElement("td");
    nimi.textContent = henkilo.name;

    let ika = document.createElement("td");
    ika.textContent = henkilo.age;

    let ikaTeksti = henkilo.age;

    if (henkilo.age >= 18) {
      ikaTeksti += " 🍺";
    }

    ika.textContent = ikaTeksti;

    let tyo = document.createElement("td");
    tyo.textContent = henkilo.job;

    let tyoTeksti = henkilo.job;

    if (henkilo.job.toLowerCase() === "opiskelija") {
      tyoTeksti += " 🎓";
    }

    tyo.textContent = tyoTeksti;

    let ajokortti = document.createElement("td");
    ajokortti.textContent = henkilo.driversLicense ? "On" : "Ei";

    tr.appendChild(nimi);
    tr.appendChild(ika);
    tr.appendChild(tyo);
    tr.appendChild(ajokortti);

    rivit.appendChild(tr);
  });
}

function lisaaHenkilo() {

  let nimi = document.getElementById("nimi").value;
  let ika = Number(document.getElementById("ika").value);
  let tyo = document.getElementById("tyo").value;
  let ajokortti = document.getElementById("ajokortti").checked;

  if (ika < 0) {

    alert("Iän pitää olla positiivinen luku!");

  } else {

    let uusiHenkilo = {
      name: nimi,
      age: ika,
      job: tyo,
      driversLicense: ajokortti
    };

    henkilot.push(uusiHenkilo);

    luoRivit();
  }
}

luoRivit();