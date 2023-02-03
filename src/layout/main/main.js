import React from 'react'
import Navigation from '../navigation/navigation'
import Slider from '../../components/slider/slider'
import O2 from '../../components/o2/o2'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {active: true}
  }

  toggleActive = () => {
    this.setState({active: !this.state.active})
  }

  render(){
    return (
      <div className='main'>
        <Navigation
          active={this.state.active} 
        />
        <Slider
          active={this.state.active} 
          toggleActive={this.toggleActive}
        />
        <O2 />
        
      </div>
    )
  }
}

export default Main