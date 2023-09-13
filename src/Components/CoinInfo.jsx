

import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify';
const CoinInfo = () => {
 
   const Params=useParams({})
  let url=`https://api.coingecko.com/api/v3/coins/${Params.coinId}`
  const [coin,setCoin]=useState()

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoin(response.data)
      console.log(response.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  
  
  return (

    
    <div className='w-full h-auto bg-gray-900'>
      {coin &&
      <div className='max-w-[1140px] text-white mx-auto py-4'>
        <div className='shadow-xl my-7 text-center font-bold border-2 md:text-5xl text-4xl py-4  shadow-black flex items-center justify-center '>
          <h2>{coin.name}</h2>
        </div>
        {/* priceBox */}
        <div className='shadow-xl  my-7 border-2 border-white py-6 px-4 shadow-black'>
          <p className='bg-purple-700 inline-block p-1 rounded-lg'>Rank#{coin.market_cap_rank}</p>
          <div className='flex items-center sm:flex-row flex-col sm:justify-between'>
            <div className='flex gap-5 text-gray-300 pt-3'>
              <img src={coin.image.thumb} alt="" />
              <p>{coin.name}</p>
              <p>({coin.symbol}/usdt)</p>
            </div>
            <h1 className='font-bold md:text-5xl sm:text-4xl text-3xl px-7'>${coin.market_data.current_price.usd}</h1>
          </div>

        </div>
        {/* info box */}
        <div className='shadow-xl border-2 sm:block flex justify-between items-center border-white my-7 py-6 px-5 shadow-black'>
          <div className='bg-gray-800  font-bold   grid sm:grid-cols-6 grid-cols-1 py-2'>
            <p className=' w-fit md:px-9 px-2 '>1h</p>
            <p className=' w-fit md:px-9 px-2'>24h</p>
            <p className=' w-fit md:px-9 px-2 '>7d</p>
            <p className=' w-fit md:px-9 px-2 '>14d</p>
            <p className=' w-fit md:px-9 px-2 '>30d</p>
            <p className='hidden sm:inline-block w-fit md:px-9  px-2'>1y</p>
          </div>

          <div className=' grid sm:grid-cols-6  grid-cols-1  py-2 text-center '>
            <p className=' w-fit md:px-9 px-3  '>{coin.market_data.price_change_percentage_1h_in_currency.usd}%</p>
            <p className=' w-fit md:px-9 px-3  '>{coin.market_data.price_change_percentage_24h_in_currency.usd}%</p>
            <p className=' w-fit md:px-9 px-3  '>{coin.market_data.price_change_percentage_7d_in_currency.usd}%</p>
            <p className=' w-fit md:px-9 px-3  '>{coin.market_data.price_change_percentage_14d_in_currency.usd}%</p>
            <p className=' w-fit md:px-9 px-3  '>{coin.market_data.price_change_percentage_30d_in_currency.usd}%</p>
            <p className=' hidden sm:inline-block w-fit md:px-9 px-5  '>{coin.market_data.price_change_percentage_1y_in_currency.usd}%</p>
          </div>
        </div>
        {/* Rate list */}
        <div className='shadow-xl border-2  border-white my-7 py-3 px-4 shadow-black'>
          <div className='grid md:grid-cols-2  md:gap-20 gap-2'>
            <div className='flex item-center justify-between '>
              <p className='font-bold'>24 Hours Low</p>
              <p>${coin.market_data.low_24h.usd}</p>
            </div>

            <div className='flex items-enter justify-between'>
              <p className='font-bold'>Market Cap</p>
              <p>${coin.market_data.market_cap.usd}</p>
            </div>
          </div>
          <div className='grid md:grid-cols-2 pt-12 md:gap-20 gap-2'>
            <div className='flex item-center justify-between '>
              <p className='font-bold'>24 Hours High</p>
              <p>${coin.market_data.market_cap.usd}</p>
            </div>

            <div className='flex items-enter justify-between'>
              <p className='font-bold'>Circulating Supply</p>
              <p>{coin.market_data.circulating_supply}</p>
            </div>
          </div>
        </div>
        {/* About */}
        <div className='shadow box-border  shadow-black rounded-xl border-2 my-3 py-3 px-6 border-white max-h-auto'>
          <h2 className='font-bold pt-2 text-2xl'>About</h2>
          <p dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(coin.description.en),
          }} className='py-3 sm:text-md '></p>
        </div>
      </div>



    }
    </div>
    
  )
}

export default CoinInfo