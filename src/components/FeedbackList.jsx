import React from 'react'
import { useContext } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

// import propTypes from 'prop-types'

import FeedbackItems  from './feedbackitems'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)



   if(!feedback || feedback.lenght === 0){
        return <p>NO feedback yet</p>
   }


   return (
    <div className='feedback-list'> 
    <AnimatePresence>
    {feedback.map((item) =>(
       <motion.div 
        key={item.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
       
       >
        <FeedbackItems key={item.id} item={item}
        />
       </motion.div>
    ))}
    </AnimatePresence>
     </div>
  )


//   return (
//     <div className='feedback-list'> 
//     {feedback.map((item) =>(

//        <FeedbackItems key={item.id} item={item}
//        handleDelete={handleDelete} />
//     ))}
//      </div>
//   )
}

// FeedbackList.propTypes = {
//     feedback: propTypes.arrayOf(
//         propTypes.shape({
//             id: propTypes.number.isRequired,
//             Text: propTypes.string.isRequired,
//             rating: propTypes.number.isRequired,
//         })
//     )
// }

export default FeedbackList
