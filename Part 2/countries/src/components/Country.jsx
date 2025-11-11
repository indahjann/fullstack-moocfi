import Weather from './Weather'

const Country = ({ country }) => {
    const languages = Object.values(country.languages)

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>

            <h2>Languages</h2>
            <ul>
                {languages.map(languange => 
                    <li key={languange}>{languange}</li>
                )}
            </ul>

            <img 
                src={country.flags.png}
                alt={`flag of ${country.name.common}`}
                width="150"
            />
            
            <Weather capital={country.capital[0]} />
        </div>
    )
}

export default Country