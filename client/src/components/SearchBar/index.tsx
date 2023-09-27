"use client"
import axios from "axios"
import { useState } from "react"

const SearchBar = ({setSearchedValue, setIsSearched, isSearched, searchedValue, setSearchResult}:any) => {

    const [searchState, setSearchState] = useState("")

    const handleSearchInput = (e:any) => {
        setSearchState(e.target.value)
    }

    const handleSearchReset = () => {
        setSearchState("")
        setIsSearched(false)
        setSearchedValue("")
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        setSearchedValue(searchState.toLowerCase())
        setIsSearched(true)
        setSearchState("")
        const response = await axios.get(`https://rick-and-morty-rest-marcosst17.vercel.app/api/search-characters?value=${searchState.toLowerCase()}`)
        setSearchResult(response?.data?.characters)
    }

    return (
        <div className="searchbar-main mr-auto ml-auto flex gap-2">
           <form className="w-[400px]" onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>
                    <input placeholder="Search a character" onChange={handleSearchInput} value={searchState} type="search" id="default-search" className="capitalize block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                    <button type="submit" className="text-black absolute right-2.5 bottom-2.5 bg-[#ecd06f] hover:bg-[#ecb03a] focus:ring-4 focus:outline-none focus:ring-[#ecb03a] font-medium rounded-lg text-sm px-4 py-2 focus:ring-blue-800">Search</button>
                </div>
            </form>
            {
                isSearched ? 
                <div className="flex flex-row items-center rounded-2xl px-4 gap-2 bg-gray-700 border-gray-600 border-[1px]">
                    <p className="capitalize text-gray-400">
                        {searchedValue}
                    </p>
                    <button onClick={handleSearchReset} className="text-[#ecd06f] hover:text-[#ecb03a] font-bold">
                        X
                    </button>
                </div> 
                : <></>
            }
        </div>
    )
}

export default SearchBar