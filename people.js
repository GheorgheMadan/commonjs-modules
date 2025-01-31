const {firstLastName} = require('./names')
const {threeHobbies} = require('./hobbies')

function fullNameHobbies(){
    return {
        fullName: firstLastName('Gheorghe', 'Madan'), 
        hobbies: threeHobbies('fotografia', 'musica', 'sport')
    }
}
console.log(fullNameHobbies());


