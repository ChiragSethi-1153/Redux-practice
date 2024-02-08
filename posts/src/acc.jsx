import React, { useState } from 'react'
import { fetchComments } from './redux/slice/commentSlice';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';

const Acc = ({content}) => {

    const dispatch = useDispatch();
  const [show, setShow] = useState(false)

  const handleComments = (content) => {
    console.log(content.id)
    
    // {<Comment allcontent={content.id} />}
    dispatch(fetchComments(content.id))

    setShow(true)

  }
  
  const comments = useSelector((state) => state.comment.content[content.id])
  const commentLoading = useSelector((state) => state.comment.isLoading)
  const commentError = useSelector((state) => state.comment.error)
  const handleShow = () => {
      setShow(false)
  }

  return (
    <div>
      <div className='post'>
              <p>{content.title}</p>
              <p>{content.body}</p>
             <div className='comment-btn-div'>
              <button className='comment-btn' onClick={() => handleComments(content)}>Comments</button>   
             </div>
             
               { comments?.map((comment) => (
                <>
                <div className={`${show ? 'showcomments' : 'hide-comments'}`}>
                {console.log(comment.name)}
                <p>{comment.body}</p>
                </div>
                </>
            ))}
            
            {show&&<button onClick={handleShow} className='hide-btn' >Hide Comments</button>}
                    
        
            </div>
    </div>
  )
}

export default Acc
