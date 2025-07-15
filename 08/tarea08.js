async function mostrarPrimeros20Pokemon() {
  const container = document.getElementById('pokemon-container-a');
  container.innerHTML = '';
  try {
    // Fetch the first 20 Pokémon
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    if (!response.ok) throw new Error('No se pudo obtener la lista de Pokémon');
    const data = await response.json();

    // Fetch details for each Pokémon to get the image
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      if (!res.ok) throw new Error('No se pudo obtener detalles de ' + pokemon.name);
      return res.json();
    });

    const pokemons = await Promise.all(promises);

    pokemons.forEach(poke => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${poke.sprites.front_default}" alt="${poke.name}">
        <div>${poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</div>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

mostrarPrimeros20Pokemon();