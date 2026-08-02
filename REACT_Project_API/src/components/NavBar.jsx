import React from 'react'

const NavBar = ({ setToggleCartSection }) => {
  return (
    <div className='bg-gray-700 rounded p-5 flex items-center justify-between'>
      <div>logo</div>
      <div className='flex gap-10 text-xl'>
        <p className='hover:bg-black p-2 rounded-xl' onClick={() => {
            setToggleCartSection(false)
        }}>Home</p>
        <p className='hover:bg-black p-2 rounded-xl' onClick={() => {
            setToggleCartSection(true)
        }}>Cart</p>
      </div>
      <button>Login</button>
    </div>
  )
}

export default NavBar
