let nombreIngresado = prompt("¿Como es tu nombre? Si no desea brindar esa información, escribir ESC");
while (nombreIngresado !== "ESC"){
    let salida  = "¡Hola, " + nombreIngresado + "!";
    alert(salida);
    break;
}


let edad = parseInt(prompt("Cual es tu edad"));
do{
alert("¡Pedir ayuda a un adulto!");
break;
}while(edad < 15)


let numero = parseInt(prompt("Quiero saber la tabla del número... (ingrese un número)"))
for(let i = 1; i <= 10; i++ ){
    console.log(numero + " X " + i + " = " + numero*i )
}
