let travellength= parseFloat(prompt("Inserisci quanti km vuoi percorrere"));
let age= parseInt(prompt("Inserisci la tua età"));
let ticketprice= (travellength * 0.21);
let finalprice = ticketprice.toFixed(2);

if (age>=65) {
   ticketprice= (ticketprice * 0.6);
}
else if (age<18) {
    ticketprice= (ticketprice * 0.8);
}
else {
    ticketprice= ticketprice;
}

console.log ("Il prezzo del tuo biglietto è:" + finalprice);

document.getElementById("utent-price").innerHTML="Il prezzo del tuo biglietto è €" + finalprice;