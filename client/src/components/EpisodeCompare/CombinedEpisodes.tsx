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

    if (selectedCharacterOne?.hasOwnProperty("empty") || selectedCharacterTwo?.hasOwnProperty("empty")){
        return (
            <div className="absolute w-[20%] flex flex-col items-center text-center px-2">
                <h4 className="text-xl font-semibold text-white mb-4">INFORMATION</h4>
                <p className="mb-2">See in what episodes your favorite Rick & Morty characters appear.</p>
                <p>Select one from each grid to see the list of episodes that have both characters!</p>
                <p className="mt-6">Character status:</p>
                <p className="text-[#00ff00]">Green = Alive</p>
                <p className="text-[#3c3cdf]">Blue = Unknown</p>
                <p className="text-[#ff0000]">Red = Dead</p>
            </div>
        )
    }

    return (
        <>
            <p className='font-bold text-white text-center mb-6 mt-4'>{`Combined Episodes: `}</p>
            <div className={`px-8 relative ${selectedCharacterOne?.hasOwnProperty("id") && selectedCharacterTwo?.hasOwnProperty("id") && combinedEpisodes.length > 0 ? "episode-list-container" : ""}`}>
                {
                    selectedCharacterOne?.hasOwnProperty("id") && selectedCharacterTwo?.hasOwnProperty("id") && combinedEpisodes.length > 0 &&
                    combinedEpisodes.map((episode:any) => (
                        <div key={episode.id} className="bg-gray-500 flex p-2 flex-row text-[#fff] justify-between mb-2 mt-2">
                            <p>
                                {`${episode.episode} - "${episode.name}"`}
                            </p>
                            <p className='w-[160px] text-end'>{episode.air_date}</p>
                        </div>
                    ))
                    
                }
            </div>
        </>
    )
    
    
}

export default CombinedEpisodes