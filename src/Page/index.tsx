import React from 'react'
import Home from '../Components/Home/Home'
import NewArrival from '../Components/Home/NewArrival'
import Executive from '../Components/Home/Executive'
import Discount from '../Components/Home/Discount'

const Index = () => {
  return (
    <>
      <Home />
      {/* You can add more components or elements here if needed */}
      {/* For example, you might want to add a footer or additional sections */}
      <NewArrival />
      <Executive/>
      <Discount />
    </>
  )
}

export default Index
