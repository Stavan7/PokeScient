const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/?limit=30`);
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchPokemonData = async url => {
  try {
    const response = await fetch(url);
    const json = response.json();
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
