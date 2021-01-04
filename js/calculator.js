//Existe la función eval(string), que recibe un string y lo pasa a un calculo.

//variables
//button variables
let botones = document.getElementsByClassName("calculator_button");
let igual = document.getElementById("igual");
let clear = document.getElementById("clear");

//display variable
let display = document.getElementById("calculator_display");

//functions

//display functions
function displayAdd(value){
    display.value += value;
}
function displayClear(){
    display.value = "";
}

//add buttons events

igual.addEventListener("click",function(){
    let result = eval(display.value);
    displayClear();
    displayAdd(result);

},false);

clear.addEventListener("click",displayClear,false);

for(let i=0;i<botones.length;i++){
    botones[i].addEventListener("click",function(){ displayAdd(botones[i].textContent);},false);
}

