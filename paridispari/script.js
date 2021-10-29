/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

let pariOdispari = prompt("pari o dispari");

let numUtente = parseInt(prompt("Inserisci un numero tra 1 e 5"));
document.getElementById("stampaUtente").innerHTML=`hai scelto il n ${numUtente}`;

numPc = Math.round(Math.random() * 4 +1);
document.getElementById("stampaPc").innerHTML=`il Pc ha generato il n ${numPc}`;

const somma =  numUtente + numPc;

console.log(somma);

if (verificaNumero(somma) == pariOdispari) {
    document.getElementById("stamparisultato").innerHTML=`hai vinto`;
} else {
    document.getElementById("stamparisultato").innerHTML=`hai perso`;
}

function verificaNumero(num) {

    if (num % 2 == 0) {
        return "pari";
    }

    return "dispari";
}

//  if (somma % 2 == 0)
// {
//     document.getElementById("stamparisultato").innerHTML=` il risultato é pari, ${numUtente} + ${numPc} = ${somma}`;
// }
// else
// {
//     document.getElementById("stamparisultato").innerHTML=`l risultato é dispari, ${numUtente} + ${numPc} = ${somma}`;
// } 