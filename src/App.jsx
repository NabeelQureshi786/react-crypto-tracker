import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import Coins from './Components/Coins';
import CoinInfo from './Components/CoinInfo';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
function App() {

  const [coins,setCoins]=useState([]);
  
  let url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'

  useEffect(()=>{
    axios.get(url).then((response)=>{
        setCoins(response.data);
        console.log(response.data[0])
    }).catch((err)=>{
      console.log(err)
    })
  }
    ,[])
  return ( 
    <>
  <Header/>
  <Router>
   <Routes>
      <Route path='/' element={<Coins coins={coins}/>}/>
      <Route path=':coinId' element={<CoinInfo/>}/>
      
   </Routes>
  </Router>
  </>
   )
}

export default App
