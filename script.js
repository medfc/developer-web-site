document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  form.appendChild(errorMessage);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l’envoi si erreur
    errorMessage.textContent = ""; // Réinitialise le message d’erreur

    // Récupération des champs
    const nom = document.getElementById("name");
    const prenom = document.getElementById("prenom");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Vérification du nom
    if (nom.value.trim().length < 2) {
      errorMessage.textContent = "Le nom doit contenir au moins 2 lettres.";
      errorMessage.style.color = "red";
      nom.focus();
      return;
    }

    // Vérification du prénom
    if (prenom.value.trim().length < 2) {
      errorMessage.textContent = "Le prénom doit contenir au moins 2 lettres.";
      errorMessage.style.color = "red";
      prenom.focus();
      return;
    }

    // Vérification du mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      errorMessage.textContent = "Veuillez saisir une adresse e-mail valide.";
      errorMessage.style.color = "red";
      email.focus();
      return;
    }

    // Vérification du message
    if (message.value.trim() === "") {
      errorMessage.textContent = "Le champ message est obligatoire.";
      errorMessage.style.color = "red";
      message.focus();
      return;
    }

    // Si tout est bon
    errorMessage.textContent = "Formulaire envoyé avec succès !";
    errorMessage.style.color = "green";
    form.reset();
  });
});
