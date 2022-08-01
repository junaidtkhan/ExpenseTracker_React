import React from 'react';
import './App.css';


 
function App() {


  const pets = [
    {
      name: 'jhon',
      type: 'cat',
      desciption: 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock, or a laboratory animal.',
      skills: ['fetch', 'play dead', 'roll over'],
      image: 'https://cdn2.thecatapi.com/images/da6.jpg'
    },
    {
      name: 'ronny',
      type: 'cat',
      desciption: 'Two of the most popular pets are dogs and cats. Other animals commonly kept include rabbits; ferrets; pigs; rodents such as gerbils, hamsters, chinchillas, rats, mice, and guinea pigs.',
      skills: ['purr', 'play dead', 'meow'],
      image: 'https://cdn2.thecatapi.com/images/5tl.jpg'
    }
  ]
  return (
    <div  className='App'>
      <h1>My Pets</h1>
      <ul className='container'>{
        pets.map((pet, index) => (
          <li key={index}>
            <h1>{pet.name}</h1>
            <p>{pet.desciption}</p>
            <img
              src={pet.image}
              alt={pet.name}
              width="200px"
              height="200px"
            />
            <ul className='skills'>
              {
                pet.skills.map((skill, index) => (
                  <li key={index}>
                    {skill}
                  </li>
                )
                )
              }
            </ul>
          </li>
        )
        )
      }
      </ul>
    </div>
  )
}

export default App;
