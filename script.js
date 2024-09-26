let currentQuestion = 1;
const totalQuestions = 15; // Mise à jour du total de questions

// Afficher la première question
document.getElementById(`question-${currentQuestion}`).style.display = "block";

// Gestion du bouton "Suivant"
document.getElementById("next-btn").addEventListener("click", function() {
    const currentQ = document.getElementById(`question-${currentQuestion}`);
    const selectedOption = currentQ.querySelector('input[type="radio"]:checked');

    // Vérifier si une option est sélectionnée
    if (!selectedOption) {
        alert("Veuillez sélectionner une réponse avant de continuer !");
        return;
    }

    // Masquer la question actuelle
    currentQ.style.display = "none";

    currentQuestion++;

    if (currentQuestion <= totalQuestions) {
        // Afficher la question suivante
        document.getElementById(`question-${currentQuestion}`).style.display = "block";
    }

    // Si c'est la dernière question, montrer le bouton "Terminer"
    if (currentQuestion === totalQuestions) {
        document.getElementById("next-btn").style.display = "none"; // Masquer le bouton "Suivant"
        document.getElementById("finish-btn").style.display = "block"; // Afficher le bouton "Terminer"
    }
});

// Gestion du bouton "Terminer"
document.getElementById("finish-btn").addEventListener("click", function() {
    // Masquer toutes les questions
    for (let i = 1; i <= totalQuestions; i++) {
        document.getElementById(`question-${i}`).style.display = "none";
    }

    // Afficher le résultat
    document.getElementById("result").style.display = "block";
});

// Gestion du bouton "Retour à l'accueil"
document.getElementById("restart-btn").addEventListener("click", function() {
    // Réinitialiser le quiz
    currentQuestion = 1;

    // Masquer le résultat
    document.getElementById("result").style.display = "none";

    // Afficher la première question
    document.getElementById(`question-${currentQuestion}`).style.display = "block";

    // Afficher le bouton "Suivant" et masquer le bouton "Terminer"
    document.getElementById("next-btn").style.display = "block";
    document.getElementById("finish-btn").style.display = "none";
});
