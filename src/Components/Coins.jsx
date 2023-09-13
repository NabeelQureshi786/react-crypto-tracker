import React from 'react'
import { Link } from 'react-router-dom'
import { AiTwotoneUpSquare } from 'react-icons/ai'
const Coins = ({coins}) => {
    return (
        <div className='w-full h-auto bg-gray-900 text-white'>
            
            {/* header */}
            <div className='max-w-[1140px] mx-auto py-4 '>
                <div className='flex font-bold text-xl items-center justify-between shadow-xl shadow-black p-4 my-4'>
                    <AiTwotoneUpSquare />
                    <p>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p>Volume</p>
                    <p className=' hidden sm:block '>MKT Cap</p>
                </div>
              { 
              coins.map((item,index)=>
              <Link to={`${item.id}`}>
                <div className='flex  items-center justify-between shadow-xl shadow-black p-4 my-4 text-center hover:scale-[1.1] duration-300 cursor-pointer '>
                    <p>{index+1}</p>
                    <div className='flex items-center gap-2' ><img width="30px" src={item.image} alt="" /><span>{item.symbol}</span> </div>
                    <p>${item.current_price}</p>
                    <p>{item.price_change_percentage_24h}%</p>
                    <p>${item.total_volume}</p>
                    <p className=' hidden sm:block '>${item.market_cap}</p>
                   
                </div>
                </Link>
                
               )}
                
            </div>
        </div>
    )
}

export default Coins