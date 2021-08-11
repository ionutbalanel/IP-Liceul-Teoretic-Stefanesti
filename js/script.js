// ----- meniu -----

var navLinks = document.getElementById("navLinks");

function ShowMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// ----- E-mail -----
emailjs.init("user_9WduNVBHbBYvIEoUmi6oG");

function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_7j7lmys", "template_v8lsvbw", date)
        .then(function(raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function(error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}