import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])

  const [feedBackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback( )
  }, [])

  // fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(
      'http://localhost:5000/feedback?_sort=id&_order=desc'
    )
    const data = await response.json()
    setFeedback(data)
  }
  // add feedback
  const addFeedback = newFeedback => {
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }
  // delete feedback
  const deleteFeedback = id => {
    console.log(id)
    if (window.confirm('are you sure you want to delete')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }
  // update feedback item

  const updateFeedback = (id, updItem) => {
    console.log(id, updItem)
    setFeedback(
      feedback.map(item => (item.id === id ? { ...item, ...updItem } : item))
    )
  }
  //set item to be updated
  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedBackContext.Provider
      value={{
        feedback,
        feedBackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  )
}

export default FeedBackContext
