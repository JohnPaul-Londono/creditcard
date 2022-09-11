import React, {useState} from 'react'
import './CardStyle.css'


const Card = ({cardForm}) => {
    

    return (
        <div>
            <div className="cardDecoration">
                <div className="cardFront">
                    <span>"0000 0000 0000 0000"</span>
                    <div>
                        <span>{cardForm.name ? cardForm.name: 'Johnny Appleseed'}</span>
                        <span>"00"/"00"</span>
                    </div>
                </div>
                <div className='cardBack'>
                    <span>""000"</span>
                </div>
            </div>
        </div>
    )
}

export default Card
