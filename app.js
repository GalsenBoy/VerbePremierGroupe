//On définit nos pronom et terminaisons dans un tableau
let pronons = ['Je', 'Tu', 'Il/Elle', 'Nous', 'Vous', 'Ils/Elles'];
let terminaisons = ['e', 'es', 'e', 'ons', 'ez', 'ent'];

//On récupère le button
let btn = document.querySelector('.btn');

//On crée un évènement 
// Cet évènement a pour objectif de concatiniter le pronom avec le verbe dont on a soustrait les deux dernières lettres puis rajouter la terminaisons avec deux exeptions le verbe aller qui est du troisième groupe et tomber dont la première personne du pruriel change
btn.addEventListener('click', function(e) {
    let input = document.querySelector('#verbe').value;
    let verbe = input.slice(0, -2);
    if (input.slice(-2) == 'er' && input.toLowerCase() != "aller") {
        for (i = 0; i < 6; i++) {
            console.log(`${pronons[i]} ${verbe}${terminaisons[i]}`);
            if (input == 'manger') {
                terminaisons[3] = 'eons';
            }
        }
    } else {
        console.log('Le verbe saisi n\'est pas du premier groupe');
    }
})