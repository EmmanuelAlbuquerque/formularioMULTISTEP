import{
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
  } from 'react-icons/bs'

import './FinalForm.css'

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_satisfies: <BsFillEmojiHeartEyesFill/>
}

const finalform = ({data}) => {
    return (
        <div className='form-final'>
            <h2>Falta pouco...</h2>
            <p>Sua opinião é muito importante! </p>
            <p>Para concluir sua avaliação, click no botão enviar!</p>
            <h3>Aqui esta o resumo da sua avalição {data.name}:</h3>
            <p className='review-data'>
                <span>Satisfação com o produto :</span>
                {emojiData[data.review]}
            </p>
            <p className='review-data'>
                <span>Comentario:</span>
                {data.comment}
            </p>
        </div>
    )
}

export default finalform