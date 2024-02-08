
import { useEffect } from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from './redux/slice/postSlice';
// import { useState } from 'react';
// import { fetchComments } from './redux/slice/commentSlice';
// import Comment from './Comment';
import Acc from './acc';

function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchPosts())
    
  }, [dispatch])

  const loading = useSelector((state) => state.post.isLoading)
  const error = useSelector((state) => state.post.error)
  const posts = useSelector((state) => state.post.content)
  

  // console.log(comments)

  if(loading){
    return 'Loading...'
  }
  if(error){
    return error
  }


  return (
    <div className="App">

      <div className='posts'>
        {
          posts?.map((content) => (
            <Acc content={content} />
          ))
        }
       
        
   
       
        
      </div>
        
    </div>
  );
}

export default App;
