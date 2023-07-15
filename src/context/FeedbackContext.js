import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 8,
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 9,
    },
  ])

  const [feedBackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })
  // add feedback
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
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
