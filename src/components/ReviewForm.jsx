import{
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

import './ReviewForm.css'

const reviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className="review-form">
        <div className="form-control score-container">
          <label className="radio-container">
            <input type="radio" value='unsatisfied' name='review' required checked={data.review === 'unsatisfied'} onChange={(e) => updateFieldHandler('review', e.target.value)}/>
            <BsFillEmojiFrownFill/>
            <p>insatisfeito</p>
          </label>
          <label className="radio-container">
            <input type="radio" value='neutral' name='review' required checked={data.review === 'neutral'} onChange={(e) => updateFieldHandler('review', e.target.value)}/>
            <BsFillEmojiNeutralFill/>
            <p>Poderia ser melhor</p>
          </label>
          <label className="radio-container">
            <input type="radio" value='satisfied' name='review' required checked={data.review === 'satisfied'} onChange={(e) => updateFieldHandler('review', e.target.value)}/>
            <BsFillEmojiSmileFill/>
            <p>Satisfeito</p>
          </label>
          <label className="radio-container">
            <input type="radio" value='very_satisfied' name='review' required checked={data.review === 'very_satisfied'} onChange={(e) => updateFieldHandler('review', e.target.value)}/>
            <BsFillEmojiHeartEyesFill/>
            <p>Muito Satisfeito</p>
          </label>
        </div>
        <div className="form-control">
            <label htmlFor="coment">Comentario</label>
            <textarea name="coment" id="coment" placeholder='Conte sua experiência' required value={data.comment || ''} onChange={(e) => updateFieldHandler('comment', e.target.value)}></textarea>
          </div>
    </div>
  )
}

export default reviewForm