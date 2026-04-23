console.log("Muuttujia ja tietotyyppejä-sivu avattu");

let a = 3;
let b = 5;
let c = 7;
let d = 15;

function summa() {
    alert(a + b);
}

function vahennys() {
    alert(b - c);
}

function kerto() {
    alert(c * d);
}

function jako() {
    alert(d / a);
}

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
    if (b == 0) {
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