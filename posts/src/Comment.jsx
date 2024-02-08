import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments } from './redux/slice/commentSlice';

const Comment = (contentId) => {

  


  console.log(contentId)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchComments(contentId))
  }, [dispatch])


  const comments = useSelector((state) => state.comment.content)
  const commentLoading = useSelector((state) => state.comment.isLoading)
  const commentError = useSelector((state) => state.comment.error)

  console.log(comments)



  return (
    <div>




    </div>
  )
}

export default Comment
