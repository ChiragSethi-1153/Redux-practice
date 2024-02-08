import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from './redux/slice/contentSlice';
import { fetchData } from './redux/slice/dataSlice';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContent())
    dispatch(fetchData())
  }, [dispatch])
  
  const contents = useSelector((state) => state.content.contents)
  const isLoading = useSelector((state) => state.content.isLoading)
  const error = useSelector((state) => state.content.error)
  const names = useSelector((state) => state.data.contents)

 console.log(names)
  if (isLoading) {
    return 'loading...'
  }
  if (error) {
    return error
  }
  return (
    <div style={{display: 'flex', }}  >
      <div style={{width: '200px'}}>
      {
        contents?.map((content) => (
        <div key={content.id} style={{display: 'flex', flexDirection: 'column'}}>
          <img
            src={`${content.thumbnailUrl}`}
            alt={`${content.title}`}
            style={{width: '200px'}}
          />
        </div>
      ))
      }
      </div>

    </div>
  );
}
export default App;