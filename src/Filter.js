import React, { useState } from 'react'
import {Users} from './Users'
function Filter() {
    const [query, setQuery]=useState("");
  return (
    <div>
        <input type="text" className='search' placeholder='filter list' onChange={(e)=> setQuery(e.target.value)} />
        <ul className='list'>
            {Users.filter(user=>user.username.toLowerCase().includes(query)).map((user)=>(
  <li key={user.id} className='listItem'>{user.username}</li>
            ))
          
        }
           
        </ul>
    </div>
  )
}

export default Filter