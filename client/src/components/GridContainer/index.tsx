import React from 'react'
import CharacterCard from '../CharacterCard/index'

function GridContainer({characters, setSelectedCharacters, selectedCharacters, completeList}:any) {

    const handleSelectCharacter = (key:any) => {
        if(selectedCharacters.length === 2) {
            // ERROR ACA
        } else if (selectedCharacters.length === 0) {
            console.log({key});
            let char = completeList.find((el:any) => el.id === key)
            setSelectedCharacters([char])
        }
        else {
            let char = completeList.find((el:any) => el.id === key)
            setSelectedCharacters((prevState:any) => [...prevState, char])
        }
    }

    const handleUnselectCharacter = (key:any) => {
        setSelectedCharacters((prevState:any) => {
            let char = prevState.filter((el:any) => el.id !== key)
            return char
        })
    }

    return (
        <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {
            characters.map((el:any) => {
                return (
                <CharacterCard 
                    key={el.id} 
                    id={el.id} 
                    name={el.name} 
                    status={el.status} 
                    species={el.species} 
                    type={el.type} 
                    image={el.image} 
                    handleSelectCharacter={handleSelectCharacter}
                    handleUnselectCharacter={handleUnselectCharacter}
                />
                )
            })
            }
        </div>
    )
}

export default GridContainer