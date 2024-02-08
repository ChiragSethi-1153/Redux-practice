import { useEffect } from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { fetchAlbums } from './redux/slice/albumSlice';


function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAlbums())
  }, [dispatch])
  
  const album = useSelector((state) => state.album.contents)
  const loading = useSelector((state) => state.album.isLoading)
  const error = useSelector((state) => state.album.error)

console.log(album)
  if(loading){
    return 'Loading...'
  }
  if(error){
    return error
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr style={{textAlign: 'left'}} >
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
        {
          album?.map((content) => (
          <tr style={{textAlign: 'left'}} >
            <td  >{content.id}</td>
            <td>{content.title}</td>
          </tr>
        ))
      }
        </tbody>
      </table>
    </div>
  );
}

export default App;
