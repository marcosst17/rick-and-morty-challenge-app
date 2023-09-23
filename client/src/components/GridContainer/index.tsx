import React from 'react'
import CharacterCard from '../CharacterCard/index'

function GridContainer({characters}:any) {
  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {
          characters.map((el:any) => {
            return (
              <CharacterCard 
                key={el.id} 
                name={el.name} 
                status={el.status} 
                species={el.species} 
                type={el.type} 
                image={el.image} />
            )
          })
        }
    </div>
  )
}

export default GridContainer