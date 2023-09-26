import Image from 'next/image';
import React, { useState } from 'react'
import EpisodeCompareContainer from '../EpisodeCompare/index';
import GridContainer from '../GridContainer/index'
import logo from "@/public/assets/rick-morty-logo.png"

function HomePage({characters}:any) {

  const [completeList, setCompleteList] = useState(characters);
  const [selectedCharacterOne, setSelectedCharacterOne] = useState({empty: true})
  const [selectedCharacterTwo, setSelectedCharacterTwo] = useState({empty: true})

  return (
    <>  
        {/* <div className="h-[200px] relative">
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={logo}
              width={400}
              height={400}
              alt=""
              priority
            />
        </div> */}
        <div className={`${selectedCharacterOne?.hasOwnProperty("id") || selectedCharacterTwo?.hasOwnProperty("id") ? 'episode-open' : 'episode-closed'}`}>
          <GridContainer 
              completeList={completeList} 
              setSelectedCharacterOne={setSelectedCharacterOne} 
              selectedCharacterOne={selectedCharacterOne}
              setSelectedCharacterTwo={setSelectedCharacterTwo} 
              selectedCharacterTwo={selectedCharacterTwo} />
        </div>
        {/* <EpisodeCompareContainer 
            selectedCharacterOne={selectedCharacterOne}
            selectedCharacterTwo={selectedCharacterTwo} 
        /> */}
    </>
  )
}

export default HomePage