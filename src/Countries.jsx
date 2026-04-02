import React, { use, useState } from 'react';
import Country from './components/Country';
import './country/Countries.css';

const Countries = ({countriesPromiss}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle visited country clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(countriesPromiss);
    const countries = countriesData.countries;
    //console.log(countries);
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total country visited: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key= {country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                    key= {country.cca3.cca3} 
                    country = {country}
                    handleVisitedCountries = {handleVisitedCountries}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;