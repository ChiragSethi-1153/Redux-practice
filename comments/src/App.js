import { useEffect } from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'

import { fetchComments } from './redux/slice/commentSlice';


function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchComments())
  }, [dispatch])
  
  const comment = useSelector((state) => state.comment.content)
  const loading = useSelector((state) => state.comment.isLoading)
  const error = useSelector((state) => state.comment.error)

console.log(comment)
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
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
        {
          comment?.map((content) => (
          <tr style={{textAlign: 'left'}} >
            <td>{content.id}</td>
            <td>{content.name}</td>
            <td>{content.email}</td>
            <td>{content.body}</td>
          </tr>
        ))
      }
        </tbody>
      </table>
    </div>
  );
}

export default App;