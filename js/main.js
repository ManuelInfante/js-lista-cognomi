var list = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var yourSurname = prompt("Scrivi il tuo cognome");

// Pulizia caratteri: Prima lettera maiuscola e le rimanenti minuscole

yourSurname = yourSurname.charAt(0).toUpperCase() + yourSurname.slice(1).toLowerCase();

// una volta corretto pushamo il cognome dentro la lista

list.push(yourSurname);

// Oridniamo la lista
list.sort();
// console.log(list);

// Posizione umana

var listIndex = list.indexOf(yourSurname);
listIndex = listIndex + 1;
// console.log(listIndex);


// Stampiamo la lista in una ol così da vedere anche il numero nella lista con ciclo while

var i = 0;
while (i < list.length) {
    document.getElementById("surnameList").innerHTML += "<li>" + list[i] + "</li>";
    i++;
}