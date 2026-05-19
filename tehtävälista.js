console.log("tehtävälista-sivu avattu");

// Tehtävälista

let lisaa1 = ["Tehtävä 1", "Tehtävä 2"];

function paivitaLista() {
  let ul = document.getElementById("lista1");

    ul.innerHTML = "";

    for (let tehtava of lisaa1) {
        let li = document.createElement("li");
        li.innerHTML = tehtava;
        ul.appendChild(li);
    }
}

function lisaa() {
    let input = document.getElementById("uusiTehtava");
    let maara1 = document.getElementById("maara");
    let arvo = input.value;
    let maara = Number(maara1.value);
    
    for (let i = 0; i < maara; i++) {
        lisaa1.push(arvo);
    }

    paivitaLista();
    input.value = "";
    maara1.value = 1;
}

paivitaLista();

// Silmukka


    