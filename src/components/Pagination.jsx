import React from 'react'

const Pagination = ({ postsPerPage,totalPosts,paginate }) => {
  const pageNumbers = []
  for(let i =1; i<=Math.ceil(totalPosts/postsPerPage);i++){
    pageNumbers.push(i)
  }
    return (  
    <nav className='pagination mb-3'>
        {pageNumbers.map((number)=>(
            <li key={number} className="page-item">
                <a href="!#" onClick={()=>paginate(number)} className='page-link'>
                    {number}
                </a>
            </li>
        ))}
    </nav>
  )
}

export default Pagination