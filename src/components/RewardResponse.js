/* eslint-disable prettier/prettier */

import React from 'react'

const RewardResponse = ({userRew}) => {

    // Create response for the user depending on their input
    const renderParagraph = () => {
        if(userRew === "") {
            return <p></p>
        } else if (userRew === "Invalid"){
            return <p>Sorry, that account number was invalid. Please try again.</p>
        } else if(userRew !== 'N/A' ) {
            return <p>Woohooo! You're eligible for {userRew}!</p>
        } else if(userRew === 'N/A'){
            return <p>I'm sorry, you aren't currently eligible for any rewards.</p>
        }
    }

    return(
    <>
        <div id = 'response'>
            {renderParagraph()}
        </div>
    </>
    )
}

export default RewardResponse