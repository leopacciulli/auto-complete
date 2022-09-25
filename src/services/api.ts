import { COUNTRIES } from './data';
import { Country } from './types';

// Hack setTimeout to simulate an asynchronous real API...
// ...getting the countries to be displayed in autocomplete
export const getCountriesByText = async (text: string): Promise<Country[]> => {
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(COUNTRIES.filter(item =>
        item.name.toUpperCase().includes(text.toUpperCase()),
      ));
    }, 2000);
  });
}

// getting a real API - https://restcountries.com/#api-endpoints-v3-all
export const getCountryByName = async (text: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${text}`)
    .then(response => response.json())
    .catch(error => console.log(error))

  return response[0]
}