import './addUser.scss'
import React, {useState} from 'react'
import Button from '../../UI/button/Button'

export const AddUser = ({sendUserData}) => {

    const [newName, setNewName] = useState('')
    const [newAge, setNewAge] = useState('')


    const getNameHandler =(e)=>{
        setNewName(e.target.value);
    }

    const getAgeHandler =(e)=>{
        setNewAge(e.target.value)
    }

    const addUserHandler=(e)=>{
        e.preventDefault()
        sendUserData(newName, newAge);
    
        setNewAge('')
        setNewName('')
    }
  return (
        <>    
           <form onSubmit={addUserHandler} action="" className='add-container'  >
                <label className='label' htmlFor="name"> Username </label>
                <input required onChange={getNameHandler} value={newName}   type="text" id='name'  />

                <label className='age-label' htmlFor="age"> Age (Years) </label>
                <input required onChange={getAgeHandler} value={newAge} type="number" id='age'   />

                <Button />

                
        </form>
    </>

  )
}
