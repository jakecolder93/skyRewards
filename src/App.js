/* eslint-disable prettier/prettier */
import React,{useState} from 'react'
import UserForm from './components/UserForm'


const App = () => {

  const [userRewards, setUserRewards] = useState([])

  const accessDB = (accNum) => {
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('../../../sqliteData/skyTest.db');
    let sql =  `SELECT Rewards FROM SkyRewards WHERE Account = ?`
    
    const rewards = db.get(sql,[accNum], (err,row) => {
      if (err) {
        return console.error(err.message);
      }
      return setUserRewards(row.Rewards)
    })
  }


  return(
    <>
      <UserForm accessDB={accessDB}/> 
    </>
  )
}

export default App; //Current git branch is called get-rewards
