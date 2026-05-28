console.log("merkkijonot-sivu avattu");

function poimiKirjain() {
    const teksti = document.getElementById("teksti1").value;
    const numero = Number(document.getElementById("numero1").value);
    document.getElementById("tulos1").textContent = teksti[numero] || "";
}

function loydaIndeksi() {
    const teksti = document.getElementById("teksti2").value;
    const hakusana = document.getElementById("hakusana").value;
    document.getElementById("tulos2").textContent = teksti.indexOf(hakusana);
}

function leikkaaMerkkijono() {
    const teksti = document.getElementById("teksti3").value;
    const alku = Number(document.getElementById("alku").value);
    const loppu = Number(document.getElementById("loppu").value);
    document.getElementById("tulos3").textContent = teksti.slice(alku, loppu);
}

function etsiJaKorvaa() {
    const teksti = document.getElementById("teksti4").value;
    const etsittava = document.getElementById("etsi").value;
    const korvaava = document.getElementById("korvaa").value;
    document.getElementById("tulos4").textContent = teksti.replaceAll(etsittava, korvaava);
}

function poikkiJaPinoon() {
    const teksti = document.getElementById("teksti5").value;
    const jakaja = document.getElementById("jakaja").value;
    const palat = teksti.split(jakaja);
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    palat.forEach(pala => {
        const li = document.createElement("li");
        li.textContent = pala;
        lista.appendChild(li);
  });
}