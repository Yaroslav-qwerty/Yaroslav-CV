console.log("Muuttujia ja tietotyyppejä-sivu avattu");

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