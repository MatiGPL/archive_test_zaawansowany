const data = {
    name : "Mateusz",
    surname: "Reczek",
    date: "10.04.2022"
}

const button=document.querySelector('#button');
const button2=document.querySelector('#button2');
const text=document.querySelector('#text');

button.addEventListener("click", () =>{
    text.innerHTML='<p>Zadanie wykonał '+data.name +' '+ data.surname+' w dniu '+data.date+ '</p>';
  
});

button2.addEventListener("click", () =>{
    document.write('<h1>Mateusz Reczek</h1>');
});