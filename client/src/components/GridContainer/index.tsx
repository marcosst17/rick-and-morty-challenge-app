import axios from '@/node_modules/axios/index';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react'
import CharacterCard from '../CharacterCard/index'
import CombinedEpisodes from '../EpisodeCompare/CombinedEpisodes';
import EpisodeCompareContainer from '../EpisodeCompare/index';
import FilterBy from '../FilterBy/index';
import SearchBar from '../SearchBar/index';
import Pagination from './Pagination';
import logo from "@/public/assets/rick-morty-logo.png"
import { CSSTransition } from 'react-transition-group';


function GridContainer({setSelectedCharacterOne, setSelectedCharacterTwo, selectedCharacterOne, selectedCharacterTwo, completeList}:any) {

    const [filterConditionOne, setFilterConditionOne] = useState("all")
    const [filterConditionTwo, setFilterConditionTwo] = useState("all")
    const [shownCharactersOne, setShownCharactersOne] = useState({completeList, paginated: completeList.slice(0, 12), from: 0, to: 12});
    const [shownCharactersTwo, setShownCharactersTwo] = useState(completeList);
    const [isSearchedOne, setIsSearchedOne] = useState(false)
    const [isSearchedTwo, setIsSearchedTwo] = useState(false)
    const [searchedValueOne, setSearchedValueOne] = useState("")
    const [searchedValueTwo, setSearchedValueTwo] = useState("")
    const [searchResultOne, setSearchResultOne] = useState(completeList)
    const [searchResultTwo, setSearchResultTwo] = useState(completeList)
    const [pageNumberOne, setPageNumberOne] = useState(1)
    const [pageNumberTwo, setPageNumberTwo] = useState(1)

    const handleSelectCharacterOne = (key:any) => {
        let char = completeList.find((el:any) => el.id === key)
        setSelectedCharacterOne(char)
        setFilterConditionOne("all")
    }
    const handleSelectCharacterTwo = (key:any) => {
        let char = completeList.find((el:any) => el.id === key)
        setSelectedCharacterTwo(char)
        setFilterConditionTwo("all")
    }
    const handleUnselectCharacterOne = () => {
        setSelectedCharacterOne({empty: true})
    }
    const handleUnselectCharacterTwo = () => {
        setSelectedCharacterTwo({empty: true})
    }

    useEffect(() => {
        if(isSearchedOne && searchResultOne?.length > 0) {
            let filteredSearch = filterConditionOne === "all" ? searchResultOne :
                                    filterConditionOne === "status:alive" ? searchResultOne.filter((el:any) => el.status === "Alive") :
                                    filterConditionOne === "status:dead" ? searchResultOne.filter((el:any) => el.status === "Dead") :
                                    searchResultOne.filter((el:any) => el.status === "unknown")
            setShownCharactersOne({completeList: filteredSearch, paginated: filteredSearch.slice(0, 12), from: 0, to: 12})
            setPageNumberOne(1)
            return
        } else {
            switch (filterConditionOne) {
            case "all":
                setPageNumberOne(1)
                setShownCharactersOne({completeList: completeList, paginated: completeList.slice(0, 12), from: 0, to: 12})
                break;
        
            case "status:alive":
                let filteredAlive = completeList.filter((el:any) => el.status === "Alive")
                console.log({filteredAlive});
                setShownCharactersOne({completeList: filteredAlive, paginated: filteredAlive.slice(0, 12), from: 0, to: 12})
                setPageNumberOne(1)
                break;
        
            case "status:dead":
                let filteredDead = completeList.filter((el:any) => el.status === "Dead")
                console.log({filteredDead})
                setShownCharactersOne({completeList: filteredDead, paginated: filteredDead.slice(0, 12), from: 0, to: 12})
                setPageNumberOne(1)
                break;
            
            case "status:unknown":
                let filteredUnknown = completeList.filter((el:any) => el.status === "unknown")
                setShownCharactersOne({completeList: filteredUnknown, paginated: filteredUnknown.slice(0, 12), from: 0, to: 12})
                setPageNumberOne(1)
                break;
        
            default:
                setShownCharactersOne({completeList: completeList, paginated: completeList.slice(0, 12), from: 0, to: 12})
                setPageNumberOne(1)
                break;
            }
        }
    }, [filterConditionOne, completeList, isSearchedOne, searchedValueOne, searchResultOne])

    useEffect(() => {
        if(isSearchedTwo && searchResultTwo?.length > 0) {
            let filteredSearch = filterConditionTwo === "all" ? searchResultTwo :
                                filterConditionTwo === "status:alive" ? searchResultTwo.filter((el:any) => el.status === "Alive") :
                                filterConditionTwo === "status:dead" ? searchResultTwo.filter((el:any) => el.status === "Dead") :
                                searchResultTwo.filter((el:any) => el.status === "unknown")
            setShownCharactersTwo({completeList: filteredSearch, paginated: filteredSearch.slice(0, 12), from: 0, to: 12})
            setPageNumberTwo(1)
            return
        } else {
            switch (filterConditionTwo) {
            case "all":
                setShownCharactersTwo({completeList: completeList, paginated: completeList.slice(0, 12), from: 0, to: 12})
                setPageNumberTwo(1)
                break;
        
            case "status:alive":
                let filteredAlive = completeList.filter((el:any) => el.status === "Alive")
                console.log({filteredAlive});
                setShownCharactersTwo({completeList: filteredAlive, paginated: filteredAlive.slice(0, 12), from: 0, to: 12})
                setPageNumberTwo(1)
                break;
        
            case "status:dead":
                let filteredDead = completeList.filter((el:any) => el.status === "Dead")
                console.log({filteredDead})
                setShownCharactersTwo({completeList: filteredDead, paginated: filteredDead.slice(0, 12), from: 0, to: 12})
                setPageNumberTwo(1)
                break;

            case "status:unknown":
                let filteredUnknown = completeList.filter((el:any) => el.status === "unknown")
                setShownCharactersTwo({completeList: filteredUnknown, paginated: filteredUnknown.slice(0, 12), from: 0, to: 12})
                setPageNumberTwo(1)
                break;
        
            default:
                setShownCharactersTwo({completeList: completeList, paginated: completeList.slice(0, 12), from: 0, to: 12})
                setPageNumberTwo(1)
                break;
            }
        }
    }, [filterConditionTwo, completeList, isSearchedTwo, searchedValueTwo, searchResultTwo])

    useEffect(() => {
        setShownCharactersOne((prevState:any) => {
            return {...prevState, paginated: prevState.completeList.slice((pageNumberOne-1) * 12, (pageNumberOne-1) * 12 + 12), from: (pageNumberOne-1) * 12, to: (pageNumberOne-1) * 12 + 12 }
        })
    }, [pageNumberOne])

    useEffect(() => {
        setShownCharactersTwo((prevState:any) => {
            return {...prevState, paginated: prevState.completeList.slice((pageNumberTwo-1) * 12, (pageNumberTwo-1) * 12 + 12), from: (pageNumberTwo-1) * 12, to: (pageNumberTwo-1) * 12 + 12 }
        })
    }, [pageNumberTwo])

    return (
        <div className="flex flex-row justify-between">
            <div className={`character-first-grid py-4 ${selectedCharacterOne.hasOwnProperty("id") ? "compare-open-first" : "compare-closed-first"} ${selectedCharacterOne.hasOwnProperty("id") && selectedCharacterTwo.hasOwnProperty("id") ? "combined-open-left" : "combined-closed-left"}`}>
                <EpisodeCompareContainer oneOrTwo="one" handleUnselect={handleUnselectCharacterOne} selectedCharacter={selectedCharacterOne} opposite={selectedCharacterTwo} />
                {
                    selectedCharacterOne?.hasOwnProperty("empty") &&
                    <>
                        <div className="character-first-filters flex items-center flex-row mb-4">
                            <SearchBar 
                                setIsSearched={setIsSearchedOne} 
                                isSearched={isSearchedOne} 
                                setSearchedValue={setSearchedValueOne} 
                                searchedValue={searchedValueOne}
                                setSearchResult={setSearchResultOne}
                            />
                            <FilterBy setFilterCondition={setFilterConditionOne} />
                        </div>
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-4">
                            {   
                                shownCharactersOne?.completeList?.length > 0 ?
                                shownCharactersOne.paginated.map((el:any) => {
                                    return (
                                    <CharacterCard
                                        where="grid"
                                        oneOrTwo='one'
                                        key={el.id * 5} 
                                        character={el}
                                        handleSelectCharacter={handleSelectCharacterOne}
                                        handleUnselectCharacter={handleUnselectCharacterOne}
                                        selectedCharacter={selectedCharacterOne}
                                        opposite={selectedCharacterTwo}
                                    />
                                    )
                                }) : <></>
                            }
                        </div>
                        <div>
                            <Pagination 
                                pageNumber={pageNumberOne}
                                setPageNumber={setPageNumberOne}
                                totalPages={Math.ceil(shownCharactersOne?.completeList?.length / 12)}
                            />
                        </div>
                    </>
                }
                
            </div>
            <div className={`combined-grid pb-4 justify-center flex flex-col pt-48 ${selectedCharacterOne.hasOwnProperty("id") && selectedCharacterTwo.hasOwnProperty("id") ? "combined-open" : "combined-closed"}`}>
                <Image
                    className="absolute rick-logo left-1/2 transform -translate-x-1/2 "
                    src={logo}
                    width={275}
                    height={400}
                    alt=""
                    priority
                />
                <CombinedEpisodes selectedCharacterOne={selectedCharacterOne} selectedCharacterTwo={selectedCharacterTwo} />
            </div>
            <div className={`character-second-grid py-4 ${selectedCharacterTwo.hasOwnProperty("id") ? "compare-open-second" : "compare-closed-second"} ${selectedCharacterOne.hasOwnProperty("id") && selectedCharacterTwo.hasOwnProperty("id") ? "combined-open-right" : "combined-closed-right"}`}>
                <EpisodeCompareContainer oneOrTwo="two" handleUnselect={handleUnselectCharacterTwo} selectedCharacter={selectedCharacterTwo} opposite={selectedCharacterOne} />
                {
                    selectedCharacterTwo.hasOwnProperty("empty") && 
                    <>
                        <div className="character-second-filters flex items-center flex-row-reverse mb-4">
                            <SearchBar 
                                setIsSearched={setIsSearchedTwo} 
                                isSearched={isSearchedTwo} 
                                setSearchedValue={setSearchedValueTwo} 
                                searchedValue={searchedValueTwo}
                                setSearchResult={setSearchResultTwo}
                            />
                            <FilterBy setFilterCondition={setFilterConditionTwo} />
                        </div>
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-4">
                            {
                                shownCharactersTwo?.completeList?.length > 0 ?
                                shownCharactersTwo.paginated.map((el:any) => {
                                    return (
                                    <CharacterCard 
                                        where="grid"
                                        oneOrTwo='two'
                                        key={el.id * 10} 
                                        character={el}
                                        handleSelectCharacter={handleSelectCharacterTwo}
                                        handleUnselectCharacter={handleUnselectCharacterTwo}
                                        selectedCharacter={selectedCharacterTwo}
                                        opposite={selectedCharacterOne}
                                    />
                                    )
                                }) : <></>
                            }
                        </div>
                        <div>
                            <Pagination 
                                pageNumber={pageNumberTwo}
                                setPageNumber={setPageNumberTwo}
                                totalPages={Math.ceil(shownCharactersTwo?.completeList?.length / 12)}
                            />
                        </div>
                    </>
                }
            </div>            
        </div>
    )
}

export default GridContainer