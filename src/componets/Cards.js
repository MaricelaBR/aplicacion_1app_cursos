import React from 'react'
import imagen2 from '../assets/JS.png'
import imagen1 from '../assets/java-e.jpg'
import imagen3 from '../assets/Py.jpg'
import Card from './Card'
const cards = [
  {
    id:1,
    title: 'Java',
    image:imagen1,
    instructor: "Augustin Meza"
  },
  {
    id:2,
    title: 'JavaScript',
    image:imagen2,
    instructor: "Cristian Rodriguez"

  },
  {
    id:3,
    title: 'Python',
    image:imagen3,
    instructor: "Alan Osornio"
  }
]
export default function Cards() {
  console.log(cards)
 
  return (
  <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
          {
            cards.map( c=> (
              <div className='col-md-4' key={cards.id}>
                <Card
                key={c.id}
                id={c.id}
                title = {c.title}
                image ={c.image}
                instructor = {c.instructor}
                />

                </div>
            ))
          }
            
              
          </div>
    </div>
  )
}
