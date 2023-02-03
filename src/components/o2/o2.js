import React from 'react'
import care from '../../assets/01_care.jpg'
import design from '../../assets/02_design.jpg'
import blend from '../../assets/03_blend_1.jpg'
import color from '../../assets/04_koloryzacja.jpg'
import pure from '../../assets/05_so_pure.jpg'
import O2image from './o2image.js'

class O2 extends React.Component {

  render() {
    return(
      <div className='d-md-flex flex-md-row flex-wrap bg-white'>
        <div className='row gx-0 o2-row'>
          <div className='col-md-4 lef d-flext align-self-center ' >
            <div className='o2-title'>
              <span className='d-block'>
                MARKI
              </span>
              <span>
                KEUNE
              </span>
            </div>
          </div>
          <O2image name="CARE" photo={care} className="col-md-8 right" shape="img-fluid" size="-wide"/>
        </div>
        <div className='row gx-0 o2-row'>
          <O2image name="DESIGN" photo={design} className="col-md-4 d-none d-md-block left" shape="img-fluid" size=""/>
          <O2image name="BLEND" photo={blend} className="col-md-8 right" shape="img-fluid" size="-wide"/>
        </div>
        <div className='row gx-0 o2-row' >
          <O2image name="KOLORYZACJA" photo={color} className="col-md-8 left" shape="img-fluid" size="-wide"/>
          <O2image name="SO PURE" photo={pure} className="col-md-4 col-sm-6 right" shape="image-squer" size=""/>
          <O2image name="DESIGN" photo={design} className="col-sm-6 d-md-none left" shape="image-squer" size=""/>
        </div>
      </div>
    )
  }
}

export default O2