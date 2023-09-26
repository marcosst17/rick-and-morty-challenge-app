import axios from "@/node_modules/axios/index"
import { useEffect, useState } from "react"

function CombinedEpisodes({selectedCharacterOne, selectedCharacterTwo}:any) {

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
    )
    
    
}

export default CombinedEpisodes