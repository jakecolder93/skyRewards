/* eslint-disable prettier/prettier */

import React from 'react'

const RewardResponse = ({userRew}) => {

   /* const renderParagraph = () => {
        if(userRew === 'N/A') {
            return <p>I'm sorry, you aren't currently eligible for any rewards.</p>
        } else if(userRew !== 'N/A' ) {
            return <p>Woohooo! You're eligible for {userRew} rewards!</p>
        } else {
            return <p></p>
        }
    } */

    const renderParagraph = () => {
        if(userRew !== 'N/A' && userRew === "") {
            return <p></p>
        } else if(userRew !== 'N/A' ) {
            return <p>Woohooo! You're eligible for {userRew}!</p>
        } else if(userRew === 'N/A'){
            return <p>I'm sorry, you aren't currently eligible for any rewards.</p>
        }
    }

    return(
    <>
        <div>
            {renderParagraph()}
        </div>
    </>
    )
}

export default RewardResponse