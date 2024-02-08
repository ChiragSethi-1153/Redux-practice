
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { fetchTodos } from './redux/slice/todoSlice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const todos = useSelector((state) => state.todo.content)
  const loading = useSelector((state) => state.todo.isLoading)
  const error = useSelector((state) => state.todo.error)

  if(loading){
    return "Loading..."
  }
  if(error){
    return error
  }

  console.log(todos)


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
          todos?.map((content) => (
          <tr style={{textAlign: 'left'}} >
            <td>{content.id}</td>
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
