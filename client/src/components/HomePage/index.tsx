import React, { useState } from 'react'
import GridContainer from '../GridContainer/index'

function HomePage({characters}:any) {

  const [completeList, setCompleteList] = useState(characters);
  const [selectedCharacterOne, setSelectedCharacterOne] = useState({empty: true})
  const [selectedCharacterTwo, setSelectedCharacterTwo] = useState({empty: true})

  return (
    <>  
        <div className={`${selectedCharacterOne?.hasOwnProperty("id") || selectedCharacterTwo?.hasOwnProperty("id") ? 'episode-open' : 'episode-closed'}`}>
          <GridContainer 
              completeList={completeList} 
              setSelectedCharacterOne={setSelectedCharacterOne} 
              selectedCharacterOne={selectedCharacterOne}
              setSelectedCharacterTwo={setSelectedCharacterTwo} 
              selectedCharacterTwo={selectedCharacterTwo} />
        </div>
    </>
  )
}

export default HomePage