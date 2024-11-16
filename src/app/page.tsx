'use client'
import { useState } from "react";
import { useEffect } from "react";

interface CoinRates {
  BTC: number;
  ETH: number;
  USDT: number;
  LINK: number;
  BNB: number;
  XRP: number;
  ADA: number;
  DOGE: number;
  SOL: number;
  AVAX: number;
}

interface CoinMarketResponse {
  rates: CoinRates;
}


export default function CoinMArket(){
  const [data,setData] = useState<CoinMarketResponse | null>(null);
  const API_KEY = 'f6e945ee7008cc33cbbe1fe6bfb099e1'
  useEffect(
    ()=>{

      fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)

      .then((Response)=> Response.json()) 
      .then((jsonConverted) => setData(jsonConverted))

    

    },[]);
    

    return(
      <div className="Header">
      <h1>CRYPTO CURRENCY MARKET RATES</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Crypto Currency</th>
            <th>Rates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bitcoin</td>
            <td>{data?.rates?.BTC}</td>
          </tr>

          <tr>
            <td>Ethereum</td>
            <td>{data?.rates?.ETH}</td>
          </tr>

          <tr>
            <td>Tether</td>
            <td>{data?.rates?.USDT}</td>
          </tr>

          <tr>
            <td>Chainlink</td>
            <td>{data?.rates?.LINK}</td>
          </tr>

          <tr>
            <td>Binance Coin</td>
            <td>{data?.rates?.BNB}</td>
          </tr>

          <tr>
            <td>Ripple</td>
            <td>{data?.rates?.XRP}</td>
          </tr>

          <tr>
            <td>Cardano</td>
            <td>{data?.rates?.ADA}</td>
          </tr>

          <tr>
            <td>Dogecoin</td>
            <td>{data?.rates?.DOGE}</td>
          </tr>

          <tr>
            <td>Solana</td>
            <td>{data?.rates?.SOL}</td>
          </tr>

          <tr>
            <td>Avalanche</td>
            <td>{data?.rates?.AVAX}</td>
          </tr>

       </tbody>
       </table>
      </div>
    )
  
}
