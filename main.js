let betainaCoco = 32.5;
let cocoGlu = 53;
let lauryl = 51.5;
let decly = 53;

//preguntar que producto voy a formular
let productoIngresado = parseInt(prompt(`Ingrese el producto que desesa formular:
1) Jabon Liquido 
2) Limpiador Facial 
3) Shampoo 
4) Gel para ducha 
5) Jabon para manos 
6) Baño de Burbujas
7) Jabon liquido para Piel Seca o Grasa
8) Limpiador Facial para Piel Seca, Sensible y bebes `));

//convertir los productos en objetos . 
class Producto {
    constructor(nombre, sal_minima, sal_maxima) {
        this.nombre = nombre;
        this.sal_minima = parseFloat(sal_minima);
        this.sal_maxima = parseFloat(sal_maxima);
         
    }

};

const jabonLiquido = new Producto("Jabon Liquido", 8, 10);
const limpiadorFacial = new Producto("Limpiador Facial", 7, 10);
const shampoo = new Producto("Shampoo", 10, 15);
const gelDucha = new Producto("Gel Ducha", 15, 25);
const jabonManos = new Producto("Jabon Manos", 5, 20);
const bañoBurbujas = new Producto("Baño Burbujas", 20, 25);
const jabonLiquidoPielSeca = new Producto("Jabon Liquido Piel Normal a Grasa", 12, 15);
const limpiadorFacialPielSeca = new Producto("Limpiador Facial Piel Seca y Sensible", 6, 10);

//esto no funciona. Preguntar
if (productoIngresado == 1) {
    productoIngresado = jabonLiquido
} else if (productoIngresado == 2) {
    productoIngresado = limpiadorFacial
} else if (productoIngresado == 3) {
    productoIngresado = shampoo
} else if (productoIngresado == 4) {
    productoIngresado =  gelDucha
} else if (productoIngresado == 5) {
    productoIngresado = jabonManos
} else if (productoIngresado == 6) {
    productoIngresado = bañoBurbujas
} else if (productoIngresado == 7) {
    productoIngresado = jabonLiquidoPielSeca
} else if (productoIngresado == 8) {
    productoIngresado = limpiadorFacialPielSeca
} else {
    alert("Ingrese una opcion valida")
}
console.log(productoIngresado);
 
//ingrese el 1er porcentaje de tensioactivo a usar
let tensioActivo1 = parseFloat(prompt(`Ingrese el 1er tensioactivo a usar
1) Betaina de Coco 
2) Coco Glucocido
3) Lauryl Glucocido
4) Decly Glucocido`));

if (tensioActivo1 == 1) {
    tensioActivo1 = betainaCoco
} else if (tensioActivo1 == 2) {
    tensioActivo1 = cocoGlu
} else if (tensioActivo1 == 3) {
    tensioActivo1 = lauryl
} else if (tensioActivo1 == 4) {
    tensioActivo1 = decly
}
console.log(tensioActivo1)
let porcentajeTensioActivo1 = parseFloat(prompt("Ingrese el porcentaje del 1er Tensioactivo"))
//ingrese el 2do porcentaje de tensioactivo a usar 

let tensioActivo2 = parseFloat(prompt(`Ingrese el 2do tensioactivo a usar
1) Betaina de Coco 
2) Coco Glucocido
3) Lauryl Glucocido
4) Decly Glucocido`));

if (tensioActivo2 == 1) {
    tensioActivo2 = betainaCoco
} else if (tensioActivo2 == 2) {
    tensioActivo2 = cocoGlu
} else if (tensioActivo2 == 3) {
    tensioActivo2 = lauryl
} else if (tensioActivo2 == 4) {
    tensioActivo2 = decly
}
console.log(tensioActivo2)
let porcentajeTensioActivo2 = parseFloat(prompt("Ingrese el porcentaje del 2do Tensioactivo"))

//multiplicar por su Sal Media

let indiceDeSal = (porcentajeTensioActivo1 * tensioActivo1 + porcentajeTensioActivo2 * tensioActivo2) / 100
alert(`El indice de sal obtenido es de ${indiceDeSal}%`)
 
if(indiceDeSal > productoIngresado.sal_minima && indiceDeSal < productoIngresado.sal_maxima){
    alert(`    La formula de tensioactivos esta dentro de los parámetros
    
    El producto ${productoIngresado.nombre} requiere un índice de sal mínimo de ${productoIngresado.sal_minima}% y un máximo de ${productoIngresado.sal_maxima}.`)
} else if (indiceDeSal < productoIngresado.sal_minima) {
   alert (`    La fórmula de tensioactivos esta por debajo de los parámetros
   
   El producto ${productoIngresado.nombre} requiere un índice de sal mínimo de ${productoIngresado.sal_minima}% y un máximo de ${productoIngresado.sal_maxima}.`)
} else  {
    alert(`    La fórmula de tensioactivos esta por encima de los parámetros
   
    El producto ${productoIngresado.nombre} requiere un índice de sal mínimo de ${productoIngresado.sal_minima}% y un máximo de ${productoIngresado.sal_maxima}.`)
}

 









