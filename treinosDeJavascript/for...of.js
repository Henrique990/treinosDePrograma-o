// for...of

let name = 'Fulano'
let names = ['Fulano', 'Sicrano', 'Beltrano']

for(let name of names) {
    console.log(name) // Fulano Sicrano Beltrano
}
console.log("===============================")
// abrindo chaves para um codigo não interferir com o outro
{

    let name = 'Fulano'
    let names = ['Fulano', 'Sicrano', 'Beltrano']

    for(let char of name) {
        console.log(char) // F u l a n o 
    }
}

{
    let person = {
        name: 'Fulano',
        age: 30,
        weight: 80
    }

    //for...in
    for(let key in person) {
        console.log(key) // name age weight
    }
    //for...of
    for(let key of person) {
        console.log(key) // name age weight
    }

}