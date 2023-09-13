import React from 'react'
import { FaCoins } from 'react-icons/fa'
const Header = () => {
  return (
    <div className='flex w-full bg-gray-900 gap-4 items-center py-4 justify-center '>
    <FaCoins size={30} className='text-purple-700' />
    <h1 className='text-4xl font-bold text-white '>Crypto <span className=' text-purple-700'>Coin</span></h1>
</div>
  )
}

export default Header