import { useEffect,useState } from "react";
import { CoinContext } from "./Context";
import { useCallback } from "react";


const CoinContextProvider=(props)=>{
    const [allCoin,setAllCoin]=useState([]);
    const [currency, setCurrency]=useState(
        {
           name:"usd",
           symbol:"$" 
        }
    )
    const fetchAllCoin=useCallback(async()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-1KSh1o8tHZBAPSFh6P9TPkY2'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.error(err));

    },[currency.name]);
    useEffect(()=>{
        fetchAllCoin()
    },[currency,fetchAllCoin])
    const contextValue={
        allCoin,currency,setCurrency

    }
    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider