import React, { useState, useEffect } from 'react'
import './FormStyle.css'

const Form = ({ setCardForm, setComplete }) => {

    const [cardData, setCardData] = useState({});

    const validateName = cardData && cardData.name !== '' && true;
    const validate = cardData.card_number && cardData.card_number.length !== 16 && true;
    const validateMonth = cardData.month < 1 || cardData.month > 12 && true;
    const validateYear = cardData.year < 22 || cardData.year > 27 && true;
    const validateCVC = cardData.cvc && cardData.cvc.length !== 3 && true;

    useEffect(() => {
        setCardForm(cardData);
    }, [cardData])

    const handleInput = ({ target: { name, value } }) => {
        setCardData({ ...cardData, [name]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (validateName && !validate && !validateMonth && !validateYear && !validateCVC) {
            setComplete(true);
        }
    };
    return (
        <div>
            <form className='cardForm' onSubmit={onSubmit}>
                <label htmlFor='name' className='labelName'>
                    Cardholder Name
                </label>
                <input
                    type="text"
                    name='name'
                    placeholder="e.g. Jane Appleseed"
                    className='card-input'
                    onChange={handleInput}
                />
                {!validateName && <span className='msg-error'>Name can't be blank</span>}

                <label htmlFor='card_number'>
                    Card Number
                </label>
                <input
                    type="number"
                    name="card_number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    onChange={handleInput}
                    onInput={(e) => e.target.value = e.target.value.slice(0, 16)}
                />
                {validate && <span className='msg-error'>Card Should be 16 numbers</span>}

                <div className='mmyy-cvc'>
                    <label className='labelMY'>
                        Exp. Date (MM/YY)
                        <div className='mmyy'>
                            <input
                                type="number"
                                name='month'
                                placeholder='MM'
                                className='card-input mm'
                                onChange={handleInput}
                                onInput={(e) => e.target.value = e.target.value.slice(0, 2)}
                            />

                            <input
                                type="number"
                                name='year'
                                placeholder='YY'
                                className='card-input yy'
                                onChange={handleInput}
                                onInput={(e) => e.target.value = e.target.value.slice(0, 2)}
                            />

                        </div>
                        {validateMonth && <span className='msg-error'>Wrong Format</span>}
                        {validateYear && <span className='msg-error'>Wrong Format</span>}

                    </label>

                    <label className='labelcvc'>
                        CVC
                        <input
                            type="number"
                            name='cvc'
                            placeholder='e.g. 123'
                            className='card-input'
                            onChange={handleInput}
                            onInput={(e) => e.target.value = e.target.value.slice(0, 3)}
                        />
                        {validateCVC && <span className='msg-error'>Wrong CVC</span>}
                    </label>
                </div>
                <button type='submit' className='confirm'>Confirm</button>
            </form>
        </div>
    )
}

export default Form
