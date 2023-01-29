import React from "react"
import slideOne from '../../assets/slide1-big.jpg'
import slideTwo from '../../assets/slide2-big.jpg'
import {ReactComponent as RightHevron} from '../../assets/right_hevron.svg'

class Slider extends React.Component {

  test(arg){
    console.log(arg)
  }

  render(){
    return(
      <div>
        <div id="slider" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators align-items-center" >
            <button type="button" style={{backgroundColor: "transparent", border: "none"}} data-bs-target="#slider" data-bs-slide-to="0" className="active white" aria-label="Slide 1">
            </button>
            <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="Slide 2" className="white">
            </button>
          </div>
          <div className="underline"></div>
          <div className="carousel-inner position-relative" style={{maxHeight: '700px'}}>
            <div id="slide1" className="carousel-item active">
            <div className="slider-text position-absolute">
              <span className="d-block">
                Bez kompromisu.
              </span>
              <span className="d-block">
                Idealnie tak jak lubisz.
              </span>
              <span className="slider-span">
                Keune <strong style={{fontWeight: "bold"}}>DESIGN</strong>
              </span>
            </div>
            <a href="#" className="slider-arrow position-absolute d-flex align-items-center">
              <div className='arrow-underline'>
              </div>
              <div className='arrow-circle'>
                <RightHevron className='arrow-hevron'/>
              </div>
            </a>
              <img src={slideOne} className="d-block w-100" alt="slide one alt" />
            </div>
            <div className="carousel-item" style={{maxHeight: '700px'}}>
            <div className="slider-text position-absolute">
              <span className="d-block">
                Twój styl.
              </span>
              <span className="d-block">
                Niepowtarzalny.
              </span>
              <span className="slider-span">
                Keune <strong style={{fontWeight: "bold"}}>DESIGN</strong>
              </span>
            </div>
              <img src={slideTwo} className="d-block w-100" alt="slide two alt" />
              <div className="slider-text">
              </div>
            </div>
          </div>
          <div className="controls position-absolute d-flex flex-column">
            <button type="button" data-bs-target="#slider" data-bs-slide="prev" onClick={() => this.test('test')}>
              <span className="carousel-control-prev-icon" aria-hidden="true" style={{width: "15px"}}></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button type="button" data-bs-target="#slider" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" style={{width: "15px"}}></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Slider