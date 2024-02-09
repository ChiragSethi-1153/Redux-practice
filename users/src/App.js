import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from './redux/slice/userSlice';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const dispatch = useDispatch()

  const [image, setImage] = useState(null)
  const [images, setImages] = useState(null)
  const [showImage, setShowImage] = useState(null)


  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  useEffect(() => {
    axios.get('http://localhost:8080/image')
    .then(res => setShowImage(res.data[1].image))
    .catch(err => console.log(err))
  }, [])

  const users = useSelector((state) => state.user.content)
  const loading = useSelector((state) => state.user.isLoading)
  const error = useSelector((state) => state.user.error)

  if(loading){
    return "Loading..."
  }
  if(error){
    return error
  }

  // console.log(users)

  const handleFile = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    console.log([...images])
    formData.append('image', image)
    for(let i=0; i<images.length; i++){
      formData.append('image2', images[i])
    }
    // formData.append('image2', [...images])
    // console.log(formData.get("images"))
       await axios.post('http://localhost:8080/upload', formData)
       .then(res => console.log(res))
       .catch(err => console.log(err))
     
  }


  return (
    <div className="App">

      <form enctype="multipart/form-data">
        <input onChange={(e)=> setImage(e.target.files[0])} type='file' name='image'/>
        <br/>
        <input type="file" name='image2' multiple onChange={(e) => setImages(e.target.files)} />
        <br/>
        <button onClick={(e) => handleFile(e)}>upload</button>
      </form>

      <br /><br />

      <div>
        <img src={`http://localhost:8080/` + showImage} alt='' />
      </div>

      {/* <table>
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
      </table> */}
    </div>
  );
}

export default App;
