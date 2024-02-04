const menuHamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links")


menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('pop')
})


const entree = document.querySelector(".entree")
const entre_pop  = document.querySelector (".entreeImages")

entree.addEventListener("click",()=>{
    entre_pop.classList.toggle('pop')}
    )


const plat = document.querySelector(".plat")
const plat_pop  = document.querySelector (".platImages")

plat.addEventListener("click",()=>{
    plat_pop.classList.toggle('pop')}
    )

const dessert = document.querySelector(".dessert")
const dessert_pop  = document.querySelector (".dessertImages")

dessert.addEventListener("click",()=>{
    dessert_pop.classList.toggle('pop')}
    )




    
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var people = document.getElementById('people').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    var errorMessage = "";

    if (name === "") {
        errorMessage += "Veuillez entrer votre nom.\n";
    }

    if (email === "") {
        errorMessage += "Veuillez entrer votre adresse e-mail.\n";
    }

    if (phone === "") {
        errorMessage += "Veuillez entrer votre numéro de téléphone.\n";
    }

    if (date === "") {
        errorMessage += "Veuillez choisir une date.\n";
    }

    if (time === "") {
        errorMessage += "Veuillez choisir une heure.\n";
    }

    if (errorMessage !== "") {
        alert(errorMessage);
    } else {
        alert("Réservation confirmée!\n\nNom: " + name + "\nE-mail: " + email + "\nTéléphone: " + phone + "\nNombre de personnes: " + people + "\nDate: " + date + "\nHeure: " + time);
        document.getElementById('reservationForm').reset();
    }
}