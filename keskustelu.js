console.log("keskustelu-sivu avattu");
    function send(event) {
        event.preventDefault();

        const birthdayField = document.getElementById("birthday");
        const emailField = document.getElementById("email");
        const typeField = document.getElementById("type");
        const usageField = document.getElementById("usage");
        const bodyField = document.getElementById("body");

        const birthday = birthdayField.value;
        const email = emailField.value;
        const type = typeField.value;
        const usage = usageField.checked;
        const body = bodyField.value;

        console.log("Birthday:", birthday);
        console.log("Email:", email);
        console.log("Type:", type);
        console.log("Usage:", usage);
        console.log("Body:", body);

        const dialog = document.getElementById("commentDialog");
        dialog.close();
    }