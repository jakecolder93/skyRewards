/* eslint-disable prettier/prettier */
import React,{useState, useEffect} from 'react'
import UserForm from './components/UserForm'
import RewardResponse from './components/RewardResponse'


const App = () => {

  const [account, setAccounts] = useState(false);
 
  useEffect(() => {
    getAccount();
  }, []);
  function getAccount() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        console.log(data)
        setAccounts(data);
      });
  }
  

  return(
    <>
      <UserForm /> 
      <RewardResponse />
    </>
  )
}

export default App; //Current git branch is called get-rewards and postgres port 5000 pswd jake123
