import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type CharacterCardProps = {
  character:any,
  handleSelectCharacter?: (key:number) => void,
  handleUnselectCharacter?: (key:number) => void,
  selectedCharacter?:any
  opposite:any,
  oneOrTwo:string,
  where:string,
}

function CharacterCard({character, selectedCharacter, opposite, oneOrTwo, where, handleSelectCharacter, handleUnselectCharacter}:CharacterCardProps) {

  const { id, status, image, name, species, origin, location } = character

  const handleSelectCharacterData = (e:any) => {
    if(e.target.checked && handleSelectCharacter){
      handleSelectCharacter(id)
    } else {
      if(handleUnselectCharacter){
        handleUnselectCharacter(id)
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
      <label className={`card-label character-card status-${status} relative max-w-xs rounded overflow-hidden shadow-lg m-2 ${checked ? "checked" : "not-checked"}`} htmlFor={`check${oneOrTwo === "one" ? id : id + "b"}`} aria-disabled={opposite?.id === id ? true : false}>
        <div className='card-label-inner relative'>
          <Image className="w-full character-avatar" src={image} alt={name} width={250} height={250} priority />
          <div className="card-description-container flex-col py-2 text-center items-center">
            {
              where !== "compare" && 
              <p className="name-container absolute top-0 bg-slate-300 w-full italic text-sm text-black">{species}</p>
            }
            <p className="name-container">{name}</p>
            {
              where === "compare" &&
              <>
                <p className="text-gray-500 text-base description-title">
                  Species:
                </p>
                <p className="text-black font-semibold description-text">
                  {species}
                </p>
                <p className="text-gray-500 text-base description-title">
                  Last known location:
                </p>
                <p className="text-black font-semibold description-text">
                  {location.name}
                </p>
                <p className="text-gray-500 text-base description-title">
                  Origin:
                </p>
                <p className="text-black font-semibold description-text">
                  {origin.name}
                </p>
              </>
            }
          </div>
          {
            !handleSelectCharacter && !handleUnselectCharacter ? <></>
            :
            <div className={`${opposite?.id === id ? "selector-disabled" : "selector-enabled"}`}>
              <input id={`check${oneOrTwo === "one" ? id : id + "b"}`} name="check" checked={checked} type="checkbox" onChange={handleSelectCharacterData} className="hidden"></input>
            </div>
          }
        </div>
        {/* {(() => {
            if (status === 'Dead') {
              return (
                <div className="absolute top-[5px] left-[10px]">
                  <div className="flex items-center gap-[.5rem]">
                    <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75" />
                    <div className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                    <div className="text-white">{status}</div>
                  </div>
                </div>
              )
            } else if (status === 'Alive') {
              return (
                <div className="absolute top-[5px] left-[10px]">
                  <div className="flex items-center gap-[.5rem]">
                    <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75" />
                    <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    <div className="text-white">{status}</div>
                  </div>
                </div>
              )
            } else {
              return (
                <div className="absolute top-[5px] left-[10px]">
                  <div className="flex items-center gap-[.5rem]">
                    <div className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-gray-400 opacity-75" />
                    <div className="relative inline-flex rounded-full h-3 w-3 bg-gray-500" />
                    <div className="text-white">{status}</div>
                  </div>
                </div>
              )
            }
        })()} */}
      </label>
  )
}

export default CharacterCard