import React, { useEffect, useState } from 'react'
import FilterBy from '../FilterBy/index';
import GridContainer from '../GridContainer/index'
import SearchBar from '../SearchBar/index'

function HomePage({characters}:any) {

  const [shownCharacters, setShownCharacters] = useState(characters);
  const [completeList, setCompleteList] = useState(characters);
  const [filterCondition, setFilterCondition] = useState("all")
  const [isSearched, setIsSearched] = useState(false)
  const [searchedValue, setSearchedValue] = useState("")
  

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

  return (
    <>
      <div>
        <SearchBar setIsSearched={setIsSearched} setSearchedValue={setSearchedValue} isSearched={isSearched} searchedValue={searchedValue} />
      </div>
      <div>
        <FilterBy setFilterCondition={setFilterCondition}/>
        <GridContainer characters={shownCharacters} />
      </div>
    </>
  )
}

export default HomePage