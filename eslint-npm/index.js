/* eslint-disable no-undef */
var nombre="Franlyn ";
var apellido=" Sierra";

estudiante=nombre.concat(apellido);
console.log(estudiante);
console.log(nombre.toUpperCase() + apellido.toUpperCase());
console.log(nombre.toLowerCase() + apellido.toLowerCase());

console.log(nombre.trim().length+apellido.trim().length);


console.log(nombre.length + apellido.length);

console.log(nombre.charAt(6));
console.log(apellido.charAt(6));


// eslint-disable-next-line no-undef
console.log(estudiante.replace(/ /g,""));
// eslint-disable-next-line eqeqeq

if(nombre !== estudiante){
    console.log("si esta contenido");
}else{
    console.log("no esta contenido");
}


// let hola="bebe "
// p='p'
// let str=`el me dijo ${hola}`

// let oro="hola 'como estas'"


// let plat=`<h1>${hola + p}</h1>`

// console.log(plat)


// let libros=["el por que","harry potter ","ferrari"]

//metodos de array


//longitud de string

let str="este es un texto";


console.log(str.length);
//partes de cadenas de caracteres

//slice()

//substring()

let slice_str=str.slice(0,12);
console.log(slice_str);
let substring_str=str.substring(0,12);
console.log(substring_str);
//remmplazar texto

let cadena="soy fran";


//al usar str solo remplaza el primero que ve el programa
console.log(cadena.replace("sierra"));


let large="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero dolore voluptates quidem quisquam esse. Natus quos perspiciatis consectetur incidunt iste, sunt aliquid impedit commodi, reprehenderit maiores pariatur officiis eligendi!"; 


//al usar g=>global, remplaza todo

console.log(large.replace(/ /g,"h"));

//metodos de cadenas de texto 2

let input="Acuario";

// eslint-disable-next-line no-unused-vars
let db="acuario";
//toLowerCase -toUpperCase


console.log(input.toUpperCase());

//concatenas texto

let str_1="soy el primero";



let str_2=" y soy la segunda";

console.log(str_1,str_2);
//eliminar espacios 

let str_3="no quiero espacios";


console.log(str_3.length);
//trim()
console.log(str.trim().length);

//obtener la letra x



let str_4="hola soy un str";

console.log(str_4.charAt(5));


//metodos cadenas 3 ultima



let large_2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero dolore voluptates quidem quisquam esse. Natus quos perspiciatis consectetur incidunt iste, sunt aliquid impedit commodi, reprehenderit maiores pariatur officiis eligendi!"; 


console.log(large_2.match(/ipsum/g));



