console.log("Muuttujia ja tietotyyppejä-sivu avattu");

// Muuttujia

function ab1() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    summa(a, b);
}

function ab2() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    vahennys(a, b);
}

function ab3() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    kerto(a, b);
}

function ab4() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    jako(a, b);
}

function summa(a, b) {
    alert(a + b);
}

function vahennys(a, b) {
    alert(a - b);
}

function kerto(a, b) {
    alert(a * b);
}

function jako(a, b) {
    alert(a / b);
}

// Laskin

function summa2(luku1, luku2) {
    document.getElementById("tulos").innerText = luku1 + luku2;
}

function vahennus2(luku1, luku2) {
    document.getElementById("tulos").innerText = luku1 - luku2;
}

function kerto2(luku1, luku2) {
    document.getElementById("tulos").innerText = luku1 * luku2;
}

function jako2(luku1, luku2) {
    if (luku2 == 0) {
        document.getElementById("tulos").innerText = "En osaa laskea!";
    } else {
        document.getElementById("tulos").innerText = luku1 / luku2;
    }
}

function summa3() {
    let luku11 = Number(document.getElementById("luku1").value);
    let luku22 = Number(document.getElementById("luku2").value);
    summa2(luku11, luku22);
}

function vahennys3() {
    let luku11 = Number(document.getElementById("luku1").value);
    let luku22 = Number(document.getElementById("luku2").value);
    vahennus2(luku11, luku22);
}

function kerto3() {
    let luku11 = Number(document.getElementById("luku1").value);
    let luku22 = Number(document.getElementById("luku2").value);
    kerto2(luku11, luku22);
}

function jako3() {
    let luku11 = Number(document.getElementById("luku1").value);
    let luku22 = Number(document.getElementById("luku2").value);
    jako2(luku11, luku22);
}

// Päivämäärä

function DateTime() {
    const nyt = new Date();

    const viikonpaiva = nyt.getDay();
    const paiva = nyt.getDate();
    const kuukausi = nyt.getMonth();
    const vuosi = nyt.getFullYear();

    const tunnit = nyt.getHours();
    const minuutit = nyt.getMinutes();
    const sekunnit = nyt.getSeconds();
    
    const viikonpaivat = [
        "sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"
    ];

    const kuukaudet = [
        "tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"
    ];

    const paivamaara1 = `${paiva}.${kuukausi + 1}.${vuosi}`;
    const aika1 = `${tunnit}.${minuutit}.${sekunnit}`;
    const paivaJaAika1 = `${paivamaara1} klo ${aika1}`;
    const viikonpaivat1 = `${viikonpaivat[viikonpaiva]}`;
    const kuukaudet1 = `${kuukaudet[kuukausi]}`;

    document.getElementById("paivamaara").textContent = paivamaara1;
    document.getElementById("aika").textContent = aika1;
    document.getElementById("paivaJaAika").textContent = paivaJaAika1;
    document.getElementById("viikonpaiva").textContent = viikonpaivat1;
    document.getElementById("kuukausi").textContent = kuukaudet1;
}

// Setit

const Veijo = new Set(["luku", "poisto"]);
const Elvira = new Set(["luku", "kirjoitus", "muokkaus"]);
const Mehdi = new Set(["luku", "muokkaus", "poisto"]);
const Tuuli = new Set(["kirjoitus", "poisto"]);

function taytaLista(setti, ulElementti) {
    setti.forEach(a => {
        const li = document.createElement("li");
        li.textContent = a;
        ulElementti.appendChild(li);
    });
}

taytaLista(Veijo, document.querySelector("#Veijo ul"));
taytaLista(Elvira, document.querySelector("#Elvira ul"));
taytaLista(Mehdi, document.querySelector("#Mehdi ul"));
taytaLista(Tuuli, document.querySelector("#Tuuli ul"));

const veijoTuuli = new Set([...Veijo, ...Tuuli]);

taytaLista(
  veijoTuuli,
  document.querySelector("#veijotuuli")
);

const mehdiElvira = new Set([...Mehdi, ...Elvira]);

taytaLista(
  mehdiElvira,
  document.querySelector("#mehdielvira")
);

const elviraTuuli = new Set([...Elvira, ...Tuuli]);

taytaLista(
  elviraTuuli,
  document.querySelector("#elviratuuli")
);

// Math-objekti

function abs() {
    let luku = Number(document.getElementById("luku1").value);
    alert(Math.abs(luku));
}

function sqrt() {
    let luku = Number(document.getElementById("luku1").value);
    alert(Math.sqrt(luku));
}

function pow() {
    let luku11 = Number(document.getElementById("luku1").value);
    let luku22 = Number(document.getElementById("luku2").value);
    alert(Math.pow(luku11, luku22));
}

function max() {
    let luku11 = Number(document.getElementById("luku1").value);
    let luku22 = Number(document.getElementById("luku2").value);
    alert(Math.max(luku11, luku22));
}

function min() {
    let luku11 = Number(document.getElementById("luku1").value);
    let luku22 = Number(document.getElementById("luku2").value);
    alert(Math.min(luku11, luku22));
}

function round() {
    let luku = Number(document.getElementById("luku1").value);
    alert(Math.round(luku));
}