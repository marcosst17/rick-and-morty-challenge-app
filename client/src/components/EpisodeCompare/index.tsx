import axios from '@/node_modules/axios/index';
import React, { useEffect, useState } from 'react'
import CharacterCard from '../CharacterCard/index'
import EpisodeList from './EpisodeList';

/* function EpisodeCompareContainer({selectedCharacterOne, selectedCharacterTwo}:any) {

    const [combinedEpisodes, setCombinedEpisodes] = useState<any[]>([])
    
    useEffect(() => {
        setCombinedEpisodes([])
        if(selectedCharacterOne?.hasOwnProperty("id") && selectedCharacterTwo?.hasOwnProperty("id")){
            let combined = selectedCharacterOne.episode.filter((str:string) => selectedCharacterTwo.episode.includes(str))
            combined.forEach(async(episode:string) => {
                const response = await axios.get(episode)
                setCombinedEpisodes((prevState:any) => {
                    let found = prevState.find((el:any) => el.id === prevState.id)
                    if(found) return prevState
                    if(!prevState || prevState?.length === 0){
                        return [response.data]
                    } else {
                        return [...prevState, response.data]
                    }
                })
            })
        }
    }, [selectedCharacterOne, selectedCharacterTwo])

    if (selectedCharacterOne?.hasOwnProperty("empty") && selectedCharacterTwo?.hasOwnProperty("empty")){
        return <></>
    }

    return (
        <div className='episode-container flex justify-between'>
            <div className=''  key={selectedCharacterOne?.id}>
                {
                    selectedCharacterOne?.hasOwnProperty("id") &&
                    <div className='flex character-holder-episodes character-first'>
                        <CharacterCard 
                            oneOrTwo="one"
                            key={selectedCharacterOne.id}
                            character={selectedCharacterOne}
                            opposite={selectedCharacterTwo}
                        />
                        <EpisodeList character={selectedCharacterOne} />
                    </div>
                }
            </div>
            <div className={`${selectedCharacterOne?.hasOwnProperty("id") && selectedCharacterTwo?.hasOwnProperty("id") && combinedEpisodes.length > 0 ? "episode-list-container" : ""}`}>
                {
                    selectedCharacterOne?.hasOwnProperty("id") && selectedCharacterTwo?.hasOwnProperty("id") && combinedEpisodes.length > 0 &&
                    combinedEpisodes.map((episode:any) => (
                        <p key={episode.id}>
                            {`${episode.episode} - ${episode.name} - ${episode.air_date}`}
                        </p>
                    ))
                    
                }
            </div>
            <div  key={selectedCharacterTwo?.id}>
                {
                    selectedCharacterTwo?.hasOwnProperty("id") &&
                    <div className='flex character-holder-episodes flex-row-reverse'>
                        <CharacterCard 
                            oneOrTwo="two"
                            key={selectedCharacterTwo.id * 4}
                            character={selectedCharacterTwo}
                            opposite={selectedCharacterOne}
                        />
                        <EpisodeList character={selectedCharacterTwo} />
                    </div>
                }
            </div>
        </div>
    )
    
    
} */

function EpisodeCompareContainer({selectedCharacter, opposite, handleUnselect, oneOrTwo}:any) {

    return (
        <div className='sticky top-0'  key={selectedCharacter?.id}>
            {
                selectedCharacter?.hasOwnProperty("id") ?
                <>
                    <div className='compare-delete flex items-center justify-center hover:scale-105'>
                        <button className='text-gray-300 underline' onClick={handleUnselect}>Select another character</button>
                    </div>
                    <div className='flex character-holder-episodes'>
                        <CharacterCard 
                            where="compare"
                            oneOrTwo={oneOrTwo}
                            key={selectedCharacter.id}
                            character={selectedCharacter}
                            opposite={opposite}
                        />
                        <p className='font-bold text-white underline mb-6 mt-4'>Character Episodes: </p>
                        <EpisodeList character={selectedCharacter} />
                    </div>
                </>
                : <></>
            }
        </div>
    )
    
    
}

export default EpisodeCompareContainer