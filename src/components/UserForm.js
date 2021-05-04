/* eslint-disable prettier/prettier */
import React from 'react'

const UserForm = () => {
    return(
        <form id='formVal'>
            <h1>Hello there!</h1>
            <p>Please enter your 4-digit account reference number:</p>
            <input
                type="number"
                min = '1000'
                max = '9999'
                id = 'userIn'
                placeholder="e.g. 1001"
                required
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default UserForm