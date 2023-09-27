import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination ({ pageNumber, totalPages, setPageNumber }:any) {
  const pageChange = (data: { selected: number }) => {
    setPageNumber(data.selected + 1)
  }

  return (
    <div className="flex justify-center">
      <ReactPaginate
        className="flex justify-center items-center gap-[1rem]"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="bg-[#ecd06f] hover:bg-[#ecb03a] text-black border-2 border-gray-300 text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center"
        nextClassName="bg-[#ecd06f] hover:bg-[#ecb03a] text-black border-2 border-gray-300 text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center"
        activeClassName="bg-slate-500 hover:bg-slate-600 text-[#ecb03a] font-bold border-2 border-gray-300 text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center hover:bg-[#ecd06f]"
        pageCount={totalPages || 1}
        onPageChange={pageChange}
        pageClassName="border-2 border-gray-300 bg-white text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center hover:bg-[gray]"
        pageLinkClassName="text-center w-[2.5rem] h-[2.5rem] rounded-[50%] flex justify-center items-center"
      />
    </div>
  )
}

export default Pagination