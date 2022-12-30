import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from './components/Card'
import Posts from './components/Posts'
import Pagination from './components/Pagination'



const App = () => {
  const [posts, setposts] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [currentPage, setcurrentPage] = useState(1)
  const [postPerPage, setpostPerPage] = useState(10)

const fetchPost=async()=>{
  setisLoading(true)
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
  setposts(data)
  setisLoading(false)
}
  
useEffect(() => {
fetchPost()
}, [])

const paginate=(number)=>{
  setcurrentPage(number)
}

// getCurrentPosts

const indexOfLastPost = currentPage * postPerPage
const indexOfFirstPost = indexOfLastPost - postPerPage
const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

  return (
    <div className='container mt-5'>  
    <h1 className='text-primary mb-3'>
      My Blog
    </h1>
    <Posts
    loading={isLoading}
    posts={currentPosts}
    />
    <Pagination
    postsPerPage={postPerPage}
    totalPosts={posts.length}
    paginate={paginate}
    />
      </div>
  )
}

export default App