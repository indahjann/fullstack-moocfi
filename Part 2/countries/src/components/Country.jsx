const Country = ({ country }) => {
    const languages = Object.values(country.languages)

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>

            <h3>languages:</h3>
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
        </div>
    )
}

export default Country