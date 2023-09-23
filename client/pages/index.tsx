import axios from '@/node_modules/axios/index'
import GridContainer from '@/src/components/GridContainer/index';
import React, { useEffect, useState } from 'react'

function App({characters}:any) {

  console.log({characters});

  return (
    <main>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-white font-bold text-xl">Logo</div>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-white">Home</a>
              <a href="#" className="text-white">About</a>
              <a href="#" className="text-white">Services</a>
              <a href="#" className="text-white">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <GridContainer characters={characters} />
    </main>
  )
}

export async function getServerSideProps () {
    const response = await axios.get("http://localhost:8080/api/get-all-characters")
    return {
      props: {
        characters: response.data.characters
      }
    }
}

export default App