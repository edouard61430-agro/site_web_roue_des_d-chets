// =========================
// SCRIPT COMMUN AUX 3 ROUES
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // On cherche la roue présente sur la page
    const roueNonDangereux = document.getElementById("roue-non-dangereux");
    const roueMetallique = document.getElementById("roue-metallique");
    const roueDangereux = document.getElementById("roue-dangereux");

    let roue = null;
    let angle = 0;

    // Déterminer la roue et son angle
    if (roueNonDangereux) {
        roue = roueNonDangereux;
        angle = 30;
    }
    else if (roueMetallique) {
        roue = roueMetallique;
        angle = 36;
    }
    else if (roueDangereux) {
        roue = roueDangereux;
        angle = 32.7;
    }

    // Rotation actuelle
    let rotation = 0;

    // Boutons
    const boutonGauche = document.getElementById("spin-gauche");
    const boutonDroite = document.getElementById("spin-droite");

    // Tourner à gauche
    if (boutonGauche) {
        boutonGauche.addEventListener("click", function () {
            rotation -= angle;
            roue.style.transform = `rotate(${rotation}deg)`;
        });
    }

    // Tourner à droite
    if (boutonDroite) {
        boutonDroite.addEventListener("click", function () {
            rotation += angle;
            roue.style.transform = `rotate(${rotation}deg)`;
        });
    }

});