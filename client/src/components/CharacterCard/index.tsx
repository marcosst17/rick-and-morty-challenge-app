import Image from 'next/image'
import React from 'react'

type CharacterCardProps = {
  name: string,
  species: string,
  status: string,
  type: string,
  image: string,
  handleSelectCharacter?: (key:number) => void,
  handleUnselectCharacter?: (key:number) => void,
  key?: number,
  id: number,
}

function CharacterCard({name, species, status, type, image, handleSelectCharacter, handleUnselectCharacter, id}:CharacterCardProps) {

  const handleSelectCharacterData = (e:any) => {
    if(e.target.checked && handleSelectCharacter){
      handleSelectCharacter(id)
    } else {
      if(handleUnselectCharacter){
        handleUnselectCharacter(id)
      }
    }
  }

  return (
    <div className="character-card max-w-xs rounded overflow-hidden shadow-lg m-4">
      <Image className="w-full" src={image} alt={name} width={300} height={300} priority />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Species: {species}
        </p>
        <p className="text-gray-700 text-base">
          Status: {status}
        </p>
      </div>
      {
        !handleSelectCharacter && !handleUnselectCharacter ? <></> 
        : 
        <div>
          <input type="checkbox" onChange={handleSelectCharacterData}></input>
        </div>
      }
      
    </div>
  )
}

export default CharacterCard