/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:*/

//1scrivo il preogramma che stampa i numeri da 1 a 100
for( let i = 1; i <=100; i++){
//2 imposto la  condizione condizione per i multipli di 3 e di 5
if( i % 3 === 0 && i % 5 === 0){
    console.log("FrizzBuzz")
//3 imposto la  condizione per i multipli di 3
}else if( i % 3 === 0 ){
    console.log("Frizz")
//4 imposto la  condizione per i multipli di 5
    }else if( i % 5 === 0){
        console.log("Buzz")
//5 Ultima condizione
    }else{
        console.log(i)
    }
}
