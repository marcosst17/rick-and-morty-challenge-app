import axios from '@/node_modules/axios/index'
import React, { useEffect, useState } from 'react'

function EpisodeList({character}:any) {

    const [episodeState, setEpisodeState] = useState<any[]>([])
    const [fetched, setFetched] = useState(false)

    useEffect(() => {
        console.log({episodeState})
    }, [episodeState])

    useEffect(() => {
        console.log({character});
        if(character.episode.length > 0){
            character.episode.forEach( async (episode:any) => {
                let response = await axios.get(episode)
                setEpisodeState((prevState) => {return [...prevState, response.data]})
            })
        }
    }, [])
    
    return (
        <div className="episode-list-container">
            {
                episodeState.length > 0 &&
                episodeState.map((episode) => {
                    return (
                        <p key={episode.id}>
                            {`${episode.episode} - ${episode.name} - ${episode.air_date}`}
                        </p>
                    )
                })
            }
        </div>
    )
}

export default EpisodeList