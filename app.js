const mainContainer = document.getElementById('main-container');
const apiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonData = async ()=>{
    const response = await fetch(`${apiUrl}pokemon/?limit=150&offset=10"`);
    const data = await response.json();
    console.log(data);
};

getPokemonData();