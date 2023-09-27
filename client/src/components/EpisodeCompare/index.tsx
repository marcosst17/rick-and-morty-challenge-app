import React from 'react'
import CharacterCard from '../CharacterCard/index'
import EpisodeList from './EpisodeList';

function EpisodeCompareContainer({selectedCharacter, opposite, handleUnselect, oneOrTwo}:any) {

    return (
        <>
        <div className='sticky top-0'  key={selectedCharacter?.id}>
            {
                selectedCharacter?.hasOwnProperty("id") ?
                <>
                    <div className='compare-delete py-8 flex items-center justify-center hover:scale-105'>
                        <button className='text-gray-300 text-xl underline' onClick={handleUnselect}>Select another character</button>
                    </div>
                    <div className='flex character-holder-episodes'>
                        <CharacterCard 
                            where="compare"
                            oneOrTwo={oneOrTwo}
                            key={selectedCharacter.id}
                            character={selectedCharacter}
                            opposite={opposite}
                        />
                        <p className='font-bold text-[#ecb03a] mb-6 mt-4'>{`Character #${oneOrTwo === "one" ? "1" : "2"} Episodes: `}</p>
                        <EpisodeList character={selectedCharacter} />
                    </div>
                </>
                : <></>
            }
        </div>
        </>
    )
    
    
}

export default EpisodeCompareContainer