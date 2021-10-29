/* 
creo un promp per chiedere una parola
creo una var parolainversa
creo una funzione dove divido e inverto le lettere della parola
mi faccio ritornare la parola creata 
se è uguale a quella del promp é palindroma
sennò no 
 */

let parola =  prompt("inserisci una parola");

let parolaInversa = invertiParola(parola);

function invertiParola(pali){
  let paliInversa = pali.split('').reverse().join('');  
return paliInversa;
}
if(parola == parolaInversa){
    document.getElementById("stampa").innerHTML=`La parola ${parolaInversa} è palindroma`;
    console.log('la parola è palindroma');
} else {
    document.getElementById("stampa").innerHTML=`La parola ${parolaInversa} non è palindroma`;
    console.log('la parola non è palindroma');
}
  

