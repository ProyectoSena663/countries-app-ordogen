import { countries } from './countries.js'

const container = document.querySelector('.country-card');
const searchInput = document.getElementById('search-input');

countries.map(({ country, capital, population }) => {
  const div = document.createElement('div');
  div.className = 'country';
  div.innerHTML = `<h2>${country}</h2><p>Capital: ${capital}</p> <p>population: ${population}</p>`;
  container.appendChild(div);
});

// Escuchar el input del usuario
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCountries = countries.filter(({ country }) =>
      country.toLowerCase().includes(searchTerm)
    );
    renderCountries(filteredCountries);
  });
  
  // Mostrar todos al inicio
  renderCountries(countries);
