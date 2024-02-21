let edad = 9
edad >=18 ? console.log('es mayor de edad...'):console.log('es menor de edad...')

let numero =-3
numero > 0 ? console.log('numero positivo') : console.log('numero negativo')

let ocupacionCancha=true
let nombreCancha='bernabeu'

const mensaje = ocupacionCancha ? `la cancha llamada ${nombreCancha} esta ocupada` : `la cancha llamada ${nombreCancha} esta disponible`
console.log(mensaje)

const email = 'arleth64@gmail.com'
const contrasena = '1234'

email == 'arleth64@gmail.com' && contrasena == '1234' ? console.log(`querido usuario con correo ${email} bienvenido al sistema`) :
console.log(`el correo o la contrasena son incorrectos`)

let colorSemaforo = 'amarillo'
colorSemaforo == 'verde' ? console.log(`el semaforo esta en ${colorSemaforo}, puede seguir`) : 
    colorSemaforo == 'rojo' ? console.log(`el color de semaforo esta en ${colorSemaforo}, no puede seguir`) : 
        colorSemaforo == 'amarillo' ? console.log("prepare motores") :
            console.log(`muestra color ${colorSemaforo}, esta disfuncional`)

let temperatura = 40
if(temperatura >= 40){
    console.log(`usted tiene fiebre, su temperatura es mayor a ${temperatura} grados`)
}

let tipoCliente = 'normal'
if (tipoCliente == 'normal') {
    console.log(`va a ser atendido en el modulo 1, por ser cliente ${tipoCliente}`)
}else if (tipoCliente == 'preferencial'){
    console.log("esta habilitado los modulos 2 y 3 para su atencion")
}else {
    console.log(`usted no es cliente del banco, opr favor dirijase al modulo 4`)
}

let emailBaseDatos= "arleth46@gmail.com"
let claveBaseDatos= "1234"
let emailIngresado= "arle@gmail.com"
let claveIngresada= "1234*"
let nombreUsuario= "Juan"

if (emailBaseDatos == emailIngresado && claveBaseDatos == claveIngresada) {
    console.log(`${nombreUsuario} bienvenido, seleccione opciones del sistema`)
} else {
    console.log(`Acceso denegado`)
}

let derecha = 0
let izquierda = 0
let arriba = 0
let abajo = 0

if (derecha) {
    console.log(`robot mueve hacia la derecha`)
}else if (izquierda) {
    console.log(`robot mueve hacia la izquierda`)
}else if (arriba) {
    console.log(`robot mueve hacia arriba`)
}else if (abajo) {
    console.log(`robot mueve hacia abajo`)
}else {
    console.log(`movimiento diferente`)
}

let encendido = 1
let velocidad = 32
if(encendido){
    console.log(`su carro esta encendido`)
    if (velocidad == 0) {
        console.log(`carro freno`)
    }else if(velocidad > 0 && velocidad <= 100){
        console.log(`carro en marcha...`)
    }else{
        console.log(`evite un accidente... exceso de velocidad`)
    }
}else{
    console.log(`encienda su vehiculo`)
}

let dia = `miercoles`
let clase = `algoritmos`
if (dia == `miercoles`) {
    console.log(`la clase de hoy es ${clase}`)
}