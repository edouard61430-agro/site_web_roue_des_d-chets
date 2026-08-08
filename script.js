const roue = document.querySelector(".roue");

const boutonGauche = document.querySelector("#spin-gauche");
const boutonDroite = document.querySelector("#spin-droite");

let rotation = 0;

boutonGauche.addEventListener("click", () => {
    rotation -= 90;
    roue.style.transform = `rotate(${rotation}deg)`;
});

boutonDroite.addEventListener("click", () => {
    rotation += 90;
    roue.style.transform = `rotate(${rotation}deg)`;
});