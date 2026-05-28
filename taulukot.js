console.log("taulukot-sivu avattu");

var numerot = [8, 3, 55, 420, 1, -5, 69, -999, 0, 321];
var sanat = ["skibidi", "rizz", "gyat", "sigma", "sus", "cap", "yeet", "lit", "simp", "cringe"];

function naytaSana() {
    const index = parseInt(document.getElementById('poimiNumero').value);
    const tulosDiv = document.getElementById('poimiTulos');
    if (!isNaN(index) && index >= 0 && index < sanat.length) {
        tulosDiv.textContent = sanat[index];
    } else {
        tulosDiv.textContent = "Virheellinen indeksi!";
    }
}

function naytaIndeksi() {
    const sana = document.getElementById('haeSana').value;
    const tulosDiv = document.getElementById('indeksiTulos');
    const index = sanat.indexOf(sana);
    tulosDiv.textContent = index !== -1 ? index : "Sanaa ei löytynyt!";
}

function leikkaaTaulukko() {
    const alku = parseInt(document.getElementById('leikkaaAlku').value);
    const loppu = parseInt(document.getElementById('leikkaaLoppu').value);
    const tulosUl = document.getElementById('leikkaaTulos');
    tulosUl.innerHTML = '';

    if (!isNaN(alku) && !isNaN(loppu) && alku >= 0 && loppu <= sanat.length && alku < loppu) {
        const osataulukko = sanat.slice(alku, loppu);
        osataulukko.forEach(s => {
            const li = document.createElement('li');
            li.textContent = s;
            tulosUl.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "Virheelliset indeksit!";
        tulosUl.appendChild(li);
    }
}

function tulostaSanat() {
    const tulosUl = document.getElementById('jarjestaTulos');
    tulosUl.innerHTML = '';
    sanat.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        tulosUl.appendChild(li);
    });
}

function jarjestaSanat() {
    sanat.sort();
    tulostaSanat();
}

function kaannaSanat() {
    sanat.reverse();
    tulostaSanat();
}

function tulostaNumerot() {
    const tulosUl = document.getElementById('jarjestaTulos');
    tulosUl.innerHTML = '';
    numerot.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        tulosUl.appendChild(li);
    });
}

function jarjestaNumerot() {
    numerot.sort((a,b) => a - b);
    tulostaNumerot();
}

function kaannaNumerot() {
    numerot.reverse();
    tulostaNumerot();
}

function tulostaNumerotSuodatus() {
    const tulosUl = document.getElementById('suodataTulos');
    tulosUl.innerHTML = '';
    numerot.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        tulosUl.appendChild(li);
    });
}

function valitsePienemmat() {
    const luku = parseFloat(document.getElementById('suodatinNumero').value);
    if (!isNaN(luku)) {
        numerot = numerot.filter(n => n < luku);
        tulostaNumerotSuodatus();
    }
}

function valitseSuuremmat() {
    const luku = parseFloat(document.getElementById('suodatinNumero').value);
    if (!isNaN(luku)) {
        numerot = numerot.filter(n => n > luku);
        tulostaNumerotSuodatus();
    }
}