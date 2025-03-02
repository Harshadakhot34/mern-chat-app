import React from 'react'
import './Left.css'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'
const Left = () => {
  return (
    <div className='Left_container'>
   <Search/>
   <Users/>
   <Logout/>
    </div>
  )
}

export default Left
