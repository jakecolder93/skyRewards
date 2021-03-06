/* eslint-disable eqeqeq */


import React,{useState, useEffect} from 'react'
import UserForm from './components/UserForm'
import RewardResponse from './components/RewardResponse'
import './styles/style.css'


const App = () => {

  const [rewards, setRewards] = useState([]);
  const [userRew, setUserRew] = useState("")
  
 // Fetch JSON data from the backend on render
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

  
// Get user reward from the JSON data
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
