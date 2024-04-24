const lista = [
    "pomodori",
    "zucchine",
    "pane",
    "uova",
    "pasta",
    "sigarette"
]

// for (let i = 0; i < lista.length; i++){
//     const elemento = lista[i]
//     console.log (elemento)
// }
const ul = document.getElementById("my-ul");
let i = 0;
while (i < lista.length){
    const elemento = lista[i];
    const myLi = document.createElement("li");
    myLi.textContent = elemento;
    console.log (elemento);
    i++;
    ul.append(myLi)
}
i = null;