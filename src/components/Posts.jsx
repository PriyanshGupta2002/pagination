import React from 'react'

const Posts = ({posts,loading}) => {
  return (
    <>
    {loading && "Loading..." }
    <ul className='list-group mb-4'>
        {posts.map((post)=>(
            <li key={post.id} className="list-group-item mb-3 rounded boxShadow border border-warning-subtle">
                {post.title}
            </li>
        ))}
    </ul>
    </>
  )
}

export default Posts