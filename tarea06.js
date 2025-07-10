function fibonacciHasta1000() {
  let a = 0, b = 1;
  const secuencia = [];

  while (a <= 1000) {
    secuencia.push(a);
    [a, b] = [b, a + b];
  }

  return secuencia;
}

const fib = fibonacciHasta1000();
console.log("Fibonacci entre 0 y 1000:", fib);

const fibPares = fib.filter(num => num % 2 === 0);
console.log("Fibonacci pares entre 0 y 1000:", fibPares);

const fibImpares = fib.filter(num => num % 2 !== 0);
console.log("Fibonacci impares entre 0 y 1000:", fibImpares);

const palabras = ["pikachu", "charmander", "bulbasaur", "squirtle"];

const palabrasMayus = palabras.map(p => p.toUpperCase());

console.log("Palabras en mayúsculas:", palabrasMayus);

const pokemones = [
  { nombre: "Charmander", tipo: "fuego" },
  { nombre: "Bulbasaur", tipo: "planta" },
  { nombre: "Squirtle", tipo: "agua" },
  { nombre: "Vulpix", tipo: "fuego" }
];

const pokemonesFuego = pokemones.filter(p => p.tipo === "fuego");

console.log("Pokemones tipo fuego:", pokemonesFuego);

let pokemonNombres = [
  'Pikachu',
  'Charmander',
  'Bulbasaur',
  'Squirtle'
];

let pokemonMayus = pokemonNombres.map(p => p.toUpperCase());

console.log(pokemonMayus);

let pokemon = [
  { nombre: 'Pikachu', tipo: 'Electrico' },
  { nombre: 'Charmander', tipo: 'Fuego' },
  { nombre: 'Bulbasaur', tipo: 'Planta' },
  { nombre: 'Squirtle', tipo: 'Agua' },
  { nombre: 'Charmeleon', tipo: 'Fuego' },
  { nombre: 'Weedle', tipo: 'bicho' },
  { nombre: 'Charizard', tipo: 'Fuego' }
];

let pokemonFuego = pokemon.filter(p => p.tipo.toLowerCase() === 'fuego');

console.log(pokemonFuego);
