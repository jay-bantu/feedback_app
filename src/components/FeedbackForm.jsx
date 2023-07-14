import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({handleAdd}) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setbtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleClick = e => {
    e.preventDefault()

    console.log(e.target.value)
  }
  const handleTextChange = e => {
    e.preventDefault()
    if (text === '') {
      setbtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setbtnDisabled(true)
      setMessage('review must be atleast 10 characters')
    } else {
      setMessage(null)
      setbtnDisabled(false)
    }
    setText(e.target.value)
    console.log(e.target.value)
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedback ={
        text,
        rating

      }
      handleAdd(newFeedback)
      setText('')
    }

  }
  
  return (
    <Card>
      <form onSubmit={handleSubmit} >
        <h2>How would you rate your service with us</h2>
        <RatingSelect select={rating => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled} version='secondary' >
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
