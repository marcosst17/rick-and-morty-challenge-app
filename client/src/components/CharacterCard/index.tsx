import Image from 'next/image'
import React from 'react'

type CharacterCardProps = {
  name: string,
  species: string,
  status: string,
  type: string,
  image: string,
}

function CharacterCard({name, species, status, type, image}:CharacterCardProps) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <Image className="w-full" src={image} alt={name} width="300" height="300" priority />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Species: {species}
        </p>
        <p className="text-gray-700 text-base">
          Status: {status}
        </p>
      </div>
    </div>
  )
}

export default CharacterCard