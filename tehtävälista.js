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
    let arvo = input.value;
    lisaa1.push(arvo);
    paivitaLista();
    input.value = "";
}

paivitaLista();

// Silmukka


    