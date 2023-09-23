import axios from '@/node_modules/axios/index'
import React, { useEffect, useState } from 'react'

function LoadDatabase({data, allCharacters}:any) {

  const handleCharacterLoad = async () => {
    console.log("Test");
    const response1 = await axios.post("http://localhost:8080/api/mongo/load-characters", {allCharacters})
  }

  return (
    <div>
      <button onClick={handleCharacterLoad}>
        Load Characters to Database
      </button>
    </div>
  )
}

export async function getServerSideProps () {
    const data = await axios.get("https://rickandmortyapi.com/api/character")
    const arr = Array.from({length: data.data.info.count}, (_, index) => index + 1);
    const allCharacters = await axios.get(`https://rickandmortyapi.com/api/character/${arr}`)
    return { 
        props: {
            allCharacters: allCharacters.data
        }
    }
}

export default LoadDatabase