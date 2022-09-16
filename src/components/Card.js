import React, {useState} from 'react'
import './CardStyle.css'


const Card = ({cardForm}) => {
    

    return (
        <div>
            <div className="cardDecoration">
                <div className="cardFront">
                    <span>{cardForm.card_number ? cardForm.card_number: '0000 0000 0000 0000'}</span>
                    <div>
                        <span>{cardForm.name ? cardForm.name: 'Johnny Appleseed'}</span>
                        <span>{cardForm.month ? cardForm.month: '00'}/{cardForm.year ? cardForm.year: '00'}</span>
                    </div>
                </div>
                <div className='cardBack'>
                    <span>{cardForm.cvc ? cardForm.cvc: '000'}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
