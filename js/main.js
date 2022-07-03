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

let fechaLimite = 25;

const desdeCero = (fechaCliente) => {
    if (fechaLimite < fechaCliente) {
        alert('Podemos hacerlo! Contactame!');
    } else{
        alert(`Agenda llena! No tenemos tiempo para hacer tu proyecto antes de día${fechaLimite}`)
    }
}

let opcion
do{
    opcion = parseInt(prompt('Ingrese una opción: \n\n 1- Quiero mi página web desde 0 \n\n 2- Quiero mantenimiento de mi página web \n\n 3- Otro'));
    switch (opcion) {
        case 1:
            fechaCliente = parseInt(prompt('Para que día del mes de Julio esperas tu proyecto? (del 7 al 31)'));
            desdeCero(fechaCliente);
            break;
        case 2:
            alert('Contactame!')
            break;
        case 3:
            alert('Contactame!')
            break;
    
        default:
            alert('Opción incorrecta')
            break;
    }
} while( opcion !== 3) 



