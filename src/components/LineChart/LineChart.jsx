import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {
    const [data,setData]=useState([["Date","Prices"]])
    useEffect(()=>{
        if (historicalData?.prices) {
            const dataCopy = [["Date", "Price"]]
            historicalData.prices.forEach(item => {
              const date = new Date(item[0]) // Make sure this is a Date object
              const price = parseFloat(item[1]) // Ensure price is a number
              dataCopy.push([date, price])
            })
            setData(dataCopy)
          }

    },[historicalData])
  return (
    <Chart
        chartType='LineChart'
        data={(data)}
        height="100%"
        legendToggle

    />
  )
}

export default LineChart