/* eslint-disable prettier/prettier */
import React from 'react'

const UserForm = () => {
    return(
        <form>
            <h1>Hello there!</h1>
            <p>Please enter your 4-digit account reference number:</p>
            <input
                type="text"
                placeholder="e.g. 1001"
            />
            <button>Submit</button>
        </form>
    )
}

export default UserForm