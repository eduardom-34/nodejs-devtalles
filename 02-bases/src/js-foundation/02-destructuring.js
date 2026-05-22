

console.log( process.env.PORT ?? 3000 );

const { SHELL } = process.env;


console.log(SHELL);


const characters = ['Flash', 'Superman', 'Batman'];



const [ , , batman]= characters;


console.log(batman);