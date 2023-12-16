const motApplication = "password"

let motUtilisateur = prompt("Entrez un mot : ")
console.log(motUtilisateur)

if (motUtilisateur === motApplication) {
    console.log("Bravo, vous avez correctement tapé le mot")
    window.location.href = 'https://snowyiy.github.io/accueil.html';
} else {
    console.log("Échec, le mot n'est pas correct")
}
