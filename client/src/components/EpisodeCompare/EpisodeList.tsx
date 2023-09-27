import axios from 'axios'
import React, { useEffect, useState } from 'react'

function EpisodeList({character}:any) {

    const [episodeState, setEpisodeState] = useState<any[]>([])

    useEffect(() => {
        if(character.episode.length > 0){
            character.episode.forEach( async (episode:any) => {
                let response = await axios.get(episode)
                setEpisodeState((prevState) => {return [...prevState, response.data]})
            })
        }
    }, [])
    
    return (
        <div className="episode-list-container w-[100%] px-8">
            {
                episodeState.length > 0 &&
                episodeState.map((episode) => {
                    return (
                        <div key={episode.id} className="bg-gray-500 flex p-2 flex-row text-[#fff] justify-between mb-2 mt-2">
                            <p>
                                {`${episode.episode} - "${episode.name}"`}
                            </p>
                            <p className='w-[160px] text-end'>{episode.air_date}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EpisodeList