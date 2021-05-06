/* eslint-disable prettier/prettier */
import React, {useRef, useState} from 'react'

const UserForm = ({getUser }) => {
    const [accNum, setAccNum] = useState("")
    const searchField = useRef(null)

    function handleSubmit(e){
        e.preventDefault()
        searchField.current.focus()
        getUser(accNum)
        setAccNum("")
    }




    return(
        <form id='formVal' onSubmit={handleSubmit}>
            <h1>Hello there!</h1>
            <p>Please enter your 4-digit account reference number:</p>
            <input
                ref={searchField}  
                value={accNum}
                onChange ={(e) => setAccNum(e.target.value)}  
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