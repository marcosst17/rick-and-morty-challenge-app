import React, { useEffect, useState } from 'react'
import EpisodeCompareContainer from '../EpisodeCompare/index';
import FilterBy from '../FilterBy/index';
import GridContainer from '../GridContainer/index'
import SearchBar from '../SearchBar/index'

function HomePage({characters}:any) {

  const [shownCharacters, setShownCharacters] = useState(characters);
  const [completeList, setCompleteList] = useState(characters);
  const [filterCondition, setFilterCondition] = useState("all")
  const [isSearched, setIsSearched] = useState(false)
  const [searchedValue, setSearchedValue] = useState("")
  const [selectedCharacters, setSelectedCharacters] = useState([]) 

  useEffect(() => {
    if(isSearched) {
      console.log("Searched")
      console.log({filterCondition});
      let filteredSearch = filterCondition === "all" ? completeList.filter((el:any) => el.name.toLowerCase().includes(searchedValue)) :
                           filterCondition === "status:alive" ? completeList.filter((el:any) => el.name.toLowerCase().includes(searchedValue) && el.status === "Alive") :
                           completeList.filter((el:any) => el.name.toLowerCase().includes(searchedValue) && el.status === "Dead")
      console.log(filteredSearch)
      setShownCharacters(filteredSearch)
      return
    } else {
      console.log("No es un search");
      switch (filterCondition) {
        case "all":
          setShownCharacters(completeList)
          break;
  
        case "status:alive":
          let filteredAlive = completeList.filter((el:any) => el.status === "Alive")
          setShownCharacters(filteredAlive)
          break;
  
        case "status:dead":
          let filteredDead = completeList.filter((el:any) => el.status === "Dead")
          setShownCharacters(filteredDead)
          break;
  
        default:
          setShownCharacters(completeList)
          break;
      }
    }
  }, [filterCondition, completeList, isSearched, searchedValue])

  useEffect(() => {
    console.log(selectedCharacters)
  }, [selectedCharacters])

  return (
    <>
      <div>
        <SearchBar setIsSearched={setIsSearched} setSearchedValue={setSearchedValue} isSearched={isSearched} searchedValue={searchedValue} />
      </div>
      <div>
        <FilterBy setFilterCondition={setFilterCondition}/>
        <GridContainer completeList={completeList} characters={shownCharacters} setSelectedCharacters={setSelectedCharacters} selectedCharacters={selectedCharacters} />
      </div>
      <EpisodeCompareContainer selectedCharacters={selectedCharacters} />
      {/* <EpisodeCompareContainer selectedCharacters={[{name: "Marcos Stricker", image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", species: "Human", type: "Human aswell", status: "Alive", imageSize: "24"}]} /> */}
    </>
  )
}

export default HomePage