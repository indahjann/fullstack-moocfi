import { useState, useEffect } from "react";
import axios from 'axios'
import Countries from './components/Countries'


const App = () => {
  const [countries, setCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
    console.log(event.target.value);
  }

  const countriesToShow = searchQuery === ''
    ? []
    : countries.filter(country => 
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )
  
  return (
    <div>
      <div>
        find countries <input value={searchQuery} onChange={handleSearchChange} />
      </div>
      <Countries countries={countriesToShow} />
    </div>
  )
  
}

export default App