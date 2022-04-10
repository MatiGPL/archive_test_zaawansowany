const data = {
    name : "Mateusz",
    surname: "Reczek",
    date: "10.04.2022"
}

const button=document.querySelector('#button');
const text=document.querySelector('#text');


button.addEventListener("click", () =>{
    text.innerHTML='<p>Zadanie wykonał '+data.name +' '+ data.surname+' w dniu '+data.date+ '</p>';
});