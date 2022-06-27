let nombreIngresado = prompt("¿Como es tu nombre? Si no desea brindar esa información, escribir ESC");
while (nombreIngresado !== "ESC"){
    let salida  = "¡Hola, " + nombreIngresado + "!";
    alert(salida);
    break;
}


let edad = parseInt(prompt("Cual es tu edad?"));
do{
    if (edad < 14){
    alert("¡Pedir ayuda a un adulto!");
    break;}
    let x =false
}while(x=false)


let numero = parseInt(prompt("Quiero saber la tabla del número... (ingrese un número)"))
for(let i = 1; i <= 10; i++ ){
    console.log(numero + " X " + i + " = " + numero*i )
}
