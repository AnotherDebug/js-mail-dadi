/* 

Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

1. Chiedo con un prompt la mail dell'utente;
2. Creo una lista che contiene le mail degli utenti registrati;
3. Creo un ciclo for;
4. All'interno del ciclo confronto la mail inserita con la lista attraverso un filtro;
5. In base all'esito verrà stampato un messaggio corrispondente. 

*/

const emailListReg = [
    "antonio.faddanno@yahoo.it",
    "pippo.pluto@gmail.com",
    "pabloescobar@yahoo.it",
    "ciccio.magro@gmail.com"
];

const emailRequest = prompt('Inserisci la tua E-Mail');

for(let i = 0; i<emailListReg.length;) {
if(emailRequest === emailListReg){};
};

    console.log(emailListReg);