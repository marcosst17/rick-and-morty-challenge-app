import React from 'react'

function FilterBy({setFilterCondition}:any) {

    const handleFilterChange = (e:any) => {
        setFilterCondition(e.target.value);
    }

  return (
    <div className="filterby-main flex items-center space-x-4">
      <label htmlFor="filter">Filter by:</label>
      <select
        id="filter"
        className="border p-2"
        onChange={handleFilterChange}
      >
        <option value="all">All</option>
        <option value="status:alive">Alive</option>
        <option value="status:dead">Dead</option>
        <option value="status:unknown">Unknown</option>
        {/* Add more options as needed */}
      </select>
    </div>
  )
}

export default FilterBy