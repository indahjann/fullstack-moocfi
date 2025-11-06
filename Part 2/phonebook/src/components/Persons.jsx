const Persons = ({ personToShow, deletePerson }) => {
  return (
    <div>
      {personToShow.map(person =>
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person.id)}>delete</button>
        </div>
      )}
    </div>
  )
}

export default Persons