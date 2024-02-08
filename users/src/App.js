import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from './redux/slice/userSlice';
import './App.css';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])


  const users = useSelector((state) => state.user.content)
  const loading = useSelector((state) => state.user.isLoading)
  const error = useSelector((state) => state.user.error)

  if(loading){
    return "Loading..."
  }
  if(error){
    return error
  }

  console.log(users)

  return (
    <div className="App">
      <table>
        <thead>
          <tr style={{textAlign: 'left'}} >
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
        {
          users?.map((content) => (
          <tr style={{textAlign: 'left'}} >
            <td>{content.id}</td>
            <td>{content.name}</td>
            <td>{content.email}</td>
            <td>{content.phone}</td>
          </tr>
        ))
      }
        </tbody>
      </table>
    </div>
  );
}

export default App;
