import React from 'react'
import CountryItem from '../CountryItem/CountryItem';
import {ICountryList} from '../../types/index'




const CountryList = ({countries}:ICountryList) => {
    console.log(countries)
  return (
  <ul className='countryList list-group '>
        {countries.map((country) => (
            <CountryItem key = {country.name} {...country}/>
        ))}
    </ul>
      
  )
}

export default CountryList;