import React from "react"
import Navigation from '../navigation/navigation'
import Slider from '../../components/slider/slider'
import O2 from '../../components/o2/o2'
const Main = () => {
  return (
    <div style={{maxWidth: "1200px", margin: "0 auto"}}>
      <Navigation />
      <Slider />
      <O2 />
      
    </div>
  )
}

export default Main