import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newMessage, setNewMessage] = useState(null)
  const [typeMessage, setTypeMessage] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
      })
    }, [])

  const showNotification = (message,type) => {
    console.log('showNotification', message, type)
    setNewMessage(message)
    setTypeMessage(type)

    setTimeout(() => setNewMessage(null), 3000)
  }
  
  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    console.log('delete', person)

    if (window.confirm(`Delete ${person.name} ?`)) {
      personService      
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          console.log("error deleting person")
          showNotification(`Information of ${person.name} has already been removed from server`, 'error')
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)

    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const changedPerson = { ...existingPerson, number: newNumber }

        personService
          .update(existingPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person =>
              person.id !== existingPerson.id ? person : returnedPerson
            ))
            showNotification(`${returnedPerson.name}'s number has been updated`, 'success')
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            console.error('Update failed:', error)
            showNotification(`Information of ${existingPerson.name} has already been removed from server`, 'error')
            setPersons(persons.filter(p => p.id !== existingPerson.id))
          })
      }
      return
    }


    const personObject = {
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        showNotification(`Added ${returnedPerson.name}`, 'success')
        setNewName('')
        setNewNumber('')
      })
  }

  const personToShow = newFilter === '' ? persons
                                        : persons.filter(person =>
                                          person.name.toLowerCase().includes(newFilter.toLowerCase())
                                        )

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={newMessage} type={typeMessage} />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h3>add new person</h3>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons personToShow={personToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App