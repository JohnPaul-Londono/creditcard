
import React from 'react'

const Thanks = ({ setComplete }) => {
    const handleInput = () => {
        setComplete(false);
    }
    return (
        <div className='form-container'>
            <div className='complete-container'>
                <div className='logo-complete'></div>
                <div className='thank-text'>
                    <h1>Thank you</h1>
                    <p>We've added your card details</p>
                </div>
                <input type='submit' className='btn-complete' value='Continue' onClick={handleInput} />
            </div>
        </div>
    )
}

export default Thanks