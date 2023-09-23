import React from 'react'

function FilterBy({setFilterCondition}:any) {

    const handleFilterChange = (e:any) => {
        setFilterCondition(e.target.value);
    }

  return (
    <div className="flex items-center space-x-4 mb-4">
      <label htmlFor="filter">Filter by:</label>
      <select
        id="filter"
        className="border p-2"
        onChange={handleFilterChange}
      >
        <option value="all">All</option>
        <option value="status:alive">Alive</option>
        <option value="status:dead">Dead</option>
        {/* Add more options as needed */}
      </select>
    </div>
  )
}

export default FilterBy