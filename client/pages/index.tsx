import axios from '@/node_modules/axios/index'
import EpisodeCompareContainer from '@/src/components/EpisodeCompare/index';
import GridContainer from '@/src/components/GridContainer/index';
import HomePage from '@/src/components/HomePage/index';
import SearchBar from '@/src/components/SearchBar/index';
import React, { useEffect, useState } from 'react'

function App({characters}:any) {

  return (
    <main className="home-page-main">
      <section id="main-container">
        <HomePage characters={characters} />
      </section>
    </main>
  )
}

export async function getStaticProps () {
    const response = await axios.get("http://localhost:8080/api/get-all-characters")
    // const response = await axios.get("http://localhost:8080/api/get-characters-range")
    return {
      props: {
        characters: response.data.characters
      }
    }
}

export default App