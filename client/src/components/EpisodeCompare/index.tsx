import React from 'react'
import CharacterCard from '../CharacterCard/index'

function EpisodeCompareContainer({selectedCharacters}:any) {

    console.log(selectedCharacters.length)
    console.log({selectedCharacters});

    if (selectedCharacters?.length > 2 || selectedCharacters?.length === 0 || !selectedCharacters){
        console.log("here");
        return <></>
    }

    return (
        <div className='episode-container flex justify-between'>
            <div className=''>
                {
                    selectedCharacters?.length > 0 &&
                    <CharacterCard key={selectedCharacters[0].id} id={selectedCharacters[0].id} name={selectedCharacters[0]?.name} species={selectedCharacters[0]?.species} status={selectedCharacters[0]?.status} type={selectedCharacters[0]?.type} image={selectedCharacters[0]?.image} />
                }
            </div>
            <div>
                Combinacion
            </div>
            <div>
                {
                    selectedCharacters?.length > 1 &&
                    <CharacterCard key={selectedCharacters[1].id} id={selectedCharacters[1].id} name={selectedCharacters[1]?.name} species={selectedCharacters[1]?.species} status={selectedCharacters[1]?.status} type={selectedCharacters[1]?.type} image={selectedCharacters[1]?.image} />
                }
            </div>
        </div>
    )
    
    
}

export default EpisodeCompareContainer