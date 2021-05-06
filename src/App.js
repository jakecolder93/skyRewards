/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */

import React,{useState, useEffect} from 'react'
import UserForm from './components/UserForm'
import RewardResponse from './components/RewardResponse'


const App = () => {

  const [rewards, setRewards] = useState([]);
  const [userRew, setUserRew] = useState("")
  
 
  useEffect(() => {
    getRewards();
  }, []); 

  function getRewards() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        setRewards(data);
      });
  }

  

  const getUser = (testIn) => {
    for(var i = 0 ; i < rewards.length ; i++){
      if(rewards[i].account == testIn){
        setUserRew(rewards[i].award)
      } else if (!(rewards.some(x => x.account == testIn))){    // Checks if user account exists
        setUserRew('Invalid')
      }
    }
  }
  

  return(
    <>
      <UserForm getUser = {getUser} /> 
      <RewardResponse  userRew = {userRew}/>
    </>
  )
}

export default App; 
