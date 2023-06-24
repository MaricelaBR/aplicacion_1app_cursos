import React from 'react'
//import imagen1 from '../assets/java-e.jpg'
export default function Card({id, title, image, instructor}) {
  return (
    <div className='card text-center bg-dark'>
        <div className='card-body text-light'> 
        <img src={image} alt='Java-e'/>
            <h4 className='card-title'>{title}</h4>
            <p className='card-tex tex-secondary'>
                Instructor: {instructor}
                </p>
                <a href='#!' className='btn btn-outline-secondary rounded-0'>
                  Ir al sitio web
                </a>
             
        
        </div>
    </div>
  )
}
