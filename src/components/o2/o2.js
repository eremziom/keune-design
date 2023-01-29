import React from 'react'
import care from '../../assets/01_care.jpg'
import design from '../../assets/02_design.jpg'
import blend from '../../assets/03_blend_1.jpg'
import color from '../../assets/04_koloryzacja.jpg'
import pure from '../../assets/05_so_pure.jpg'
import {ReactComponent as RightHevron} from '../../assets/right_hevron.svg'

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
          <div className='col-md-8 right position-relative image-container'>
            <img src={care} className='img-fluid' />
            <div className='image-title-wide'>
              <span className='d-block'>
                KEUNE
              </span>
              <span>
                CARE
              </span>
            </div>
            <div className='photo-button-wide'>
              <a href="#" className="d-flex align-items-center">
                <div className='line'>
                </div>
                <span>
                  ODKRYJ SERIE
                </span>
                <RightHevron />
              </a>
            </div>
          </div>
        </div>
        <div className='row gx-0 o2-row'>
          <div className='col-md-4 d-none d-md-block left position-relative image-container'>
            <img src={design} className='img-fluid' />
            <div className='image-title'>
              <span className='d-block'>
                KEUNE
              </span>
              <span>
                DESIGN
              </span>
            </div>
            <div className='photo-button'>
              <a href="#" className="d-flex align-items-center">
                <div className='line'>
                </div>
                <span>
                  ODKRYJ SERIE
                </span>
                <RightHevron />
              </a>
            </div>
          </div>
          <div className='col-md-8 right position-relative image-container'>
            <img src={blend} className='img-fluid' />
            <div className='image-title-wide'>
              <span className='d-block'>
                KEUNE
              </span>
              <span>
                BLEND
              </span>
            </div>
            <div className='photo-button-wide'>
              <a href="#" className="d-flex align-items-center">
                <div className='line'>
                </div>
                <span>
                  ODKRYJ SERIE
                </span>
                <RightHevron />
              </a>
            </div>
          </div>
        </div>
        <div className='row gx-0 o2-row' >
          <div className='col-md-8 left position-relative image-container'>
            <img src={color} className='img-fluid'/>
            <div className='image-title-wide'>
              <span className='d-block'>
                KEUNE
              </span>
              <span>
                KOLORYZACJA
              </span>
            </div>
            <div className='photo-button-wide'>
              <a href="#" className="d-flex align-items-center">
                <div className='line'>
                </div>
                <span>
                  ODKRYJ SERIE
                </span>
                <RightHevron />
              </a>
            </div>
          </div>
          <div className='col-md-4 col-sm-6 right position-relative image-container'>
            <img src={pure} className='image-squer'/>
            <div className='image-title'>
              <span className='d-block'>
                KEUNE
              </span>
              <span>
                SO PURE
              </span>
            </div>
            <div className='photo-button'>
              <a href="#" className="d-flex align-items-center">
                <div className='line'>
                </div>
                <span>
                  ODKRYJ SERIE
                </span>
                <RightHevron />
              </a>
            </div>
          </div>
          <div className='col-sm-6 d-md-none left position-relative image-container'>
            <img src={design} className='image-squer' />
            <div className='image-title'>
              <span className='d-block'>
                KEUNE
              </span>
              <span>
                DESIGN
              </span>
            </div>
            <div className='photo-button'>
              <a href="#" className="d-flex align-items-center">
                <div className='line'>
                </div>
                <span>
                  ODKRYJ SERIE
                </span>
                <RightHevron />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default O2