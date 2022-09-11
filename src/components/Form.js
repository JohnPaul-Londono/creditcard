import React, { useState, useEffect } from 'react'
import './FormStyle.css'

const Form = ({ setCardForm, setComplete }) => {

    const [cardData, setCardData] = useState({});
    const regExp = /[A-z]/g;

    const validateName = cardData && cardData.name !== '' && true;
    const validate = cardData.card_number && regExp.test(cardData.card_number);
    const validateMonth = cardData.month < 1 || cardData.month > 12 && true;
    const validateYear = cardData.year < 22 || cardData.year > 27 && true;
    const validateCVC = cardData.cvc && cardData.cvc.length !== 3 && true;

    useEffect(() => {
        setCardForm(cardData);
    }, [cardData])

    const handleInput = ({ target: { name, value } }) => {
        setCardData({ ...cardData, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        validateName && !validate && !validateMonth && !validateYear && !validateCVC && setComplete(true);
    };
    return (
        <div>
            <form className='cardForm' onSubmit={onSubmit}>
                <label htmlFor='name' className='labelName'>
                    Cardholder Name
                </label>
                <input type="text" name='name' placeholder="e.g. Jane Appleseed" className='card-input' onChange={handleInput} />
                {!validateName && <span className='msg-error'>Can't be blank</span>}
                <label htmlFor='card_number'>
                    Card Number
                </label>
                <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
                <div>
                </div>
                <div className='mmyy-cvc'>
                    <label className='labelMY'>
                        Exp. Date (MM/YY)
                        <div className='mmyy'>
                            <input type="text" placeholder='MM' className='card-input mm' />
                            <input type="text" placeholder='YY' className='card-input yy' />
                        </div>
                    </label>
                    <label className='labelcvc'>
                        CVC
                        <input type="text" placeholder='e.g. 123' name="cvc" className='card-input' />
                    </label>
                </div>
                <button type='submit' className='confirm'>Confirm</button>
            </form>
        </div>
    )
}

export default Form
