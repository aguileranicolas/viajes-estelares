const { Country } = require('../db')
const { COUNTRIES_API } = process.env

const axios = require('axios');

async function initial() {
  try {
    const response = await axios.get(`${COUNTRIES_API}`)
    response.data.map(country => {
      Country.create({
        id: country.cca3,
        name: country.name.common,
        imageFlag: country.flags || '',
        continent: country.continents,
        capital: country.capital ? country.capital : ['No capital'],
        subregion: country.subregion,
        area: country.area,
        population: country.population
      })
    })
    console.log('Database has been actualized')
  } catch (error) {
    console.log(error);
  }
}

module.exports = initial;