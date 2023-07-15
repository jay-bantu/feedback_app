import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedBackContext from '../context/FeedbackContext'

import { useState } from 'react'
import Card from './shared/Card'
const FeedbackItem = ({ item }) => {

  const {deleteFeedback, editFeedback} = useContext(FeedBackContext)

  return (
    <Card>
      <div className='num-display'>{item.rating} </div>
      <button className="close" onClick={()=>deleteFeedback(item.id)} ><FaTimes color='purple'  /> </button>
      <button className="edit" onClick={()=>editFeedback(item)} ><FaEdit color='purple' /></button> 
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}
FeedbackItem.propTypes={
  item: PropTypes.object.isRequired
}

export default FeedbackItem
