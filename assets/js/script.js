/* 

Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

1. Chiedo con un prompt la mail dell'utente;
2. Creo una lista che contiene le mail degli utenti registrati;
3. Creo un ciclo for;
4. Nel ciclo dichiaro una variabile della lista con indice;
5. All'interno del ciclo confronto la mail inserita con la lista attraverso un filtro;
6. Creo un flag di controllo per email corrispondente;
7. In base all'esito verrà stampato un messaggio corrispondente. 

*/



const emailListReg = [
    "antonio.faddanno@yahoo.it",
    "pippo.pluto@gmail.com",
    "pabloescobar@yahoo.it",
    "ciccio.magro@gmail.com",
    "asd"
];

let emailFound = false;

//const emailRequest = prompt('Inserisci la tua E-Mail');

for(let i = 0; i<emailListReg.length; i++) {
  const emailList = emailListReg[i];

  if(emailRequest === emailList) {
    emailFound = true;
    console.log('La tua E-Mail è presente in elenco.');
  }

};

if(!emailFound) {
    console.log('La tua E-Mail non è presente in elenco!!');
}










/* 
Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. 

1. Dichiaro due variabili che contengono gli intervalli numerici necessari per generare un numero random;
2. Dichiaro una variabile dove genero un numero random da 1 a 6;
3. Dichiaro una lista di giocatori "giocatore e pc";
4. Creo un ciclo for;
5. Dichiaro una variabile all'interno del ciclo con indice corrispondente;
6. Dichiaro due variabili che conterranno ciascuno il numero randomico;
6. In base all'indice creo un filtro per salvare il numero random in una variabile, una per giocatore e una per pc.
7. Con un filtro si stabilisce chi fa il punteggio più alto;
8. In base al punteggio viene stampato il risultato.

*/


console.log('=========================================================================================');





const min = 1;
const max = 6;

let playerX;
let pc;

const listPlayers = [
    "Giocatore x",
    "PC"
];

for(let i = 0; i<listPlayers.length; i++){
    const numRandom = Math.floor(Math.random() * (max - min + 1) + min);
    const player = listPlayers[i];
   if(i === 0){
    playerX = numRandom;
   }else{
    pc = numRandom;
   }
};


if(playerX > pc){
    console.log('Vince il GiocatoreX');
}else if (pc > playerX) {
    console.log('Vince il PC');
}else{
    console.log('pareggio');
};

console.log(playerX);
console.log(pc);

