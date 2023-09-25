import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type CharacterCardProps = {
  character:any,
  handleSelectCharacter?: (key:number) => void,
  handleUnselectCharacter?: (key:number) => void,
  selectedCharacter?:any
  opposite:any
}

function CharacterCard({character, selectedCharacter, opposite, handleSelectCharacter, handleUnselectCharacter}:CharacterCardProps) {

  const handleSelectCharacterData = (e:any) => {
    console.log("e.target: ", e.target);
    console.log("e.target.checked: ", e.target.checked)
    if(e.target.checked && handleSelectCharacter){
      console.log("first if")
      handleSelectCharacter(character.id)
    } else {
      console.log("else");
      if(handleUnselectCharacter){
        console.log("second if")
        handleUnselectCharacter(character.id)
        setChecked(false)
      }
    }
  }

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if(selectedCharacter?.hasOwnProperty("id")){
      if(selectedCharacter.id === character.id){
        setChecked(true)
      } else {
        setChecked(false)
      }
    }
  }, [selectedCharacter, character.id])

  return (
    <div className="character-card max-w-xs rounded overflow-hidden shadow-lg m-4">
      <Image className="w-full" src={character.image} alt={character.name} width={300} height={300} priority />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{character.name}</div>
        <p className="text-gray-700 text-base">
          Species: {character.species}
        </p>
        <p className="text-gray-700 text-base">
          Status: {character.status}
        </p>
      </div>
      {
        !handleSelectCharacter && !handleUnselectCharacter ? <></> 
        : 
        <div className={`${opposite?.id === character.id ? "selector-disabled" : "selector-enabled"}`}>
          <input checked={checked} type="checkbox" onChange={handleSelectCharacterData}></input>
        </div>
      }
      
    </div>
  )
}

export default CharacterCard