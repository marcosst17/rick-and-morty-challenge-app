import React from 'react'

function FilterBy({setFilterCondition}:any) {

    const handleFilterChange = (e:any) => {
        setFilterCondition(e.target.value);
    }

  return (
    <div className="filterby-main flex items-center space-x-4">
      <label className='mr-2 ml-2 text-[#ecd06f]' htmlFor="filter">Filter</label>
      <div className='select'>
        <select
          id="filter"
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="status:alive">Alive</option>
          <option value="status:dead">Dead</option>
          <option value="status:unknown">Unknown</option>
          {/* Add more options as needed */}
        </select>
        <span className="focus"></span>
      </div>
    </div>
  )
}

export default FilterBy