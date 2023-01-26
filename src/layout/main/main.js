import React from "react"
import Navigation from '../navigation/navigation'
import Slider from '../../components/slider/slider'

const Main = () => {
  return (
    <div style={{maxWidth: "1200px", margin: "0 auto"}}>
      <Slider />
      <Navigation />
    </div>
  )
}

export default Main