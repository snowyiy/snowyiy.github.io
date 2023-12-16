const motApplication = "password"

let motUtilisateur = prompt("Entrez un mot : " + motApplication)
console.log(motUtilisateur)

if (motUtilisateur === motApplication) {
    console.log("Bravo, vous avez correctement tapé le mot")
} else {
    console.log("Échec, le mot n'est pas correct")
}
