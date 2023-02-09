function greet() {
    console.log("Hello");
}
let logGreeting = (miParametro) => miParametro();
logGreeting(greet);


//function on the fly
let logGreeting2 = (miParametro) => miParametro();
logGreeting(function(){
    console.log("Hello from a function created on the fly")
})

let color = "Rojo";
let talla = "M";
let modelo = "Clásico";

console.log("Juan tiene una playera talla " + talla + " de color " + color + " modelo " + modelo);
console.log(`Juan tiene una playera talla ${talla} de color ${color} modelo ${modelo}`);