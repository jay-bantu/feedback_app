import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import FeedbackItem from './components/FeedbackItem'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackLists from './components/FeedbackLists'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = newFeedback => {
    newFeedback.id =uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback,...feedback])

  }

  const deleteFeedback = id => {
    console.log(id)
    if (window.confirm('are you sure you want to delete')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  return (
    <div className='App'>
      <Header />
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackLists feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  )
}

export default App
