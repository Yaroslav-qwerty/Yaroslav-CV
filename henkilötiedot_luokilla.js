console.log("henkilötiedot luokilla-sivu avattu");

class Person {
    constructor(name, age, job, driversLicense) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.driversLicense = driversLicense;
    }

    isUnderage() {
        return this.age < 18;
    }

    isStudent() {
        return this.job.toLowerCase() === "opiskelija" ||
                       this.job.toLowerCase() === "student";
       }
}

const persons = [
    new Person("Matti Meikäläinen", 17, "Opiskelija", false),
    new Person("Liisa Virtanen", 25, "Ohjelmoija", true),
    new Person("Pekka Korhonen", 19, "Student", true),
    new Person("Anna Lahtinen", 15, "Koululainen", false),
    new Person("Sari Nieminen", 32, "Opettaja", true)
];

const rivit = document.getElementById("rivit");

persons.forEach(person => {
    const row = document.createElement("tr");

    let ageText = person.age;
    if (!person.isUnderage()) {
        ageText += " 🍺";
    }

    let jobText = person.job;
    if (person.isStudent()) {
        jobText += " 🎓";
    }

    row.innerHTML = `
        <td>${person.name}</td>
        <td>${ageText}</td>
        <td>${jobText}</td>
        <td>${person.driversLicense ? "Kyllä" : "Ei"}</td>
    `;

    rivit.appendChild(row);
});