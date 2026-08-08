// =========================
// ROTATION DES 3 ROUES
// =========================

let rotationNonDangereux = 0;
let rotationMetallique = 0;
let rotationDangereux = 0;

// À appeler lorsque l'utilisateur clique sur le bouton
function tournerLesRoues() {

    // Angles fixes à chaque clic
    rotationNonDangereux += 30;
    rotationMetallique += 36;
    rotationDangereux += 32.7;

    // Application des rotations
    document.getElementById("roue-non-dangereux").style.transform =
        `rotate(${rotationNonDangereux}deg)`;

    document.getElementById("roue-metallique").style.transform =
        `rotate(${rotationMetallique}deg)`;

    document.getElementById("roue-dangereux").style.transform =
        `rotate(${rotationDangereux}deg)`;
}