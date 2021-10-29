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

function sommaNumeri (numUtente, numPc){
    let risultato = numUtente + numPc;
    return risultato;
     
}  

const somma = sommaNumeri(numUtente, numPc)

console.log(somma);


if (somma % 2 == 0)
{
    document.getElementById("stamparisultato").innerHTML=` il risultato é pari,    
    ${numUtente} + ${numPc} = ${somma}`;
}
else
{
    document.getElementById("stamparisultato").innerHTML=`l risultato é dispari, ${numUtente} + ${numPc} = ${somma}`;
}