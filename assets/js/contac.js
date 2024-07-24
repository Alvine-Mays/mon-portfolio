// contact.js

// Fonction pour gérer l'envoi des messages via WhatsApp ou Email
function sendMessage(method) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("contact-email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name && email && subject && message) {
        const fullMessage = `Nom: ${name}\nEmail: ${email}\nSujet: ${subject}\nMessage: ${message}`;
        const encodedMessage = encodeURIComponent(fullMessage);

        if (method === "whatsapp") {
            const whatsappLink = `https://api.whatsapp.com/send?phone=242068457521&text=${encodedMessage}`;
            window.open(whatsappLink, '_blank');
        } else if (method === "email") {
            const mailtoLink = `mailto:mayalachristgottlieb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodedMessage}`;
            window.open(mailtoLink, '_blank');
        }
    } else {
        alert("Veuillez remplir tous les champs avant d'envoyer votre message.");
    }
}

// Ajout des écouteurs d'événements pour les deux boutons
document.getElementById("sendMessageWhatsApp").addEventListener("click", function(event) {
    event.preventDefault();
    sendMessage("whatsapp");
});

document.getElementById("sendMessageEmail").addEventListener("click", function(event) {
    event.preventDefault();
    sendMessage("email");
});
