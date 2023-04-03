import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber,setPageNumber}) => {
  let [width, setWidth] = useState(window.innerWidth)
let updateDimensions = () => {
  setWidth(window.innerWidth)
}
  useEffect(()=> {
    window.addEventListener("resize", updateDimensions);
    return ()=> window.removeEventListener("resize", updateDimensions)
  }, [])
   
      return (
        <>
        <style jsx>
         {`
         @media (max-width: 768px) {
           .next,
            .prev {
              display:none;
            }
            .pagination {
              font-size:14px;
            }
         }`}
        </style>
    <ReactPaginate 
    className='pagination justify-content-center gap-4 my-4'
    nextLabel='Next'
    previousLabel='Prev'
    forcePage={pageNumber===1? 0 : pageNumber-1}
    nextclassNameName='btn btn-primary next'
    previousclassNameName='btn btn-primary prev'
    pageclassNameName='page-item '
    pageLinkclassNameName='page-link'
    activeclassNameName='active'
   marginPagesDisplayed={width < 576 ? 1 : 2}
    onPageChange={(data) => {
      setPageNumber(data.selected+1)
    }}
      pageCount={info?.pages}
    />
    </>
  )
}

export default Pagination;