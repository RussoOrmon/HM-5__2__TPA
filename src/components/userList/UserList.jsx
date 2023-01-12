import './userList.scss'
import React from 'react'

const UserList = ({ userData}) => {

    const userAges=userData.sort((a, b)=> a.age < b.age ? 1: -1 )
  
  return (
  
      <ul  >
          {userAges.map((item)=>(
              <li key={item.id} className='user-line' >
              {item.name} ({item.age}  years old)  
              </li>
          ))
      }
      </ul>
  
  )
}

export default UserList