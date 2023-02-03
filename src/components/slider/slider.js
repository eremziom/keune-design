import React from 'react'
import slideOne from '../../assets/slide1-big.jpg'
import slideTwo from '../../assets/slide2-big.jpg'
import {ReactComponent as RightHevron} from '../../assets/right_hevron.svg'

class Slider extends React.Component {

  componentDidMount() {
    const slider = document.getElementById('slider')
    slider.addEventListener('slide.bs.carousel', () => {
      this.props.toggleActive()
    })
  }

  render(){
    return(
      <div>
        <div
          id='slider'
          className='carousel slide poistion-relative'
          data-bs-ride='false'
        >
          <div className='carousel-indicators align-items-center' >
            <button 
              id='indicator1'
              type='button'
              data-bs-target='#slider'
              data-bs-slide-to='0'
              aria-label='Slide 1'
              className={this.props.active ? 'active white' : 'black-dot'}
            >
            </button>
            <button
              type='button'
              data-bs-target='#slider'
              data-bs-slide-to='1'
              aria-label='Slide 2'
              className={this.props.active ? 'white-dot' : 'active black'}
            >
            </button>
          </div>
          <div
            className={this.props.active ? 'underline' : 'underline black'}>
          </div>
          <div className='carousel-inner position-relative'>
            <div className='carousel-item active'>
              <div className='slider-text position-absolute'>
                <span className='d-block'>
                  Bez kompromisu.
                </span>
                <span className='d-block'>
                  Idealnie tak jak lubisz.
                </span>
                <span className='slider-span'>
                  Keune <strong>DESIGN</strong>
                </span>
              </div>
              <a
                href='#'
                className='slider-arrow position-absolute d-flex align-items-center'
              >
                <div className='arrow-underline'>
                </div>
                <div className='arrow-circle'>
                  <RightHevron 
                    className='arrow-hevron'
                  />
                </div>
              </a>
              <img
                src={slideOne}
                className='d-block w-100'
                alt='Bez kompromisu. Idealnie tak jak lubisz. Keune DESIGN'
              />
            </div>
            <div className='carousel-item'>
              <div className='slider-text position-absolute text-black'>
                <span className='d-block'>
                  Twój styl.
                </span>
                <span className='d-block'>
                  Niepowtarzalny.
                </span>
                <span className='slider-span'>
                  Keune <strong>DESIGN</strong>
                </span>
              </div>
              <a
                href='#'
                className='slider-arrow position-absolute d-flex align-items-center'
              >
                <div className='arrow-underline black'>
                </div>
                <div className='arrow-circle black'>
                  <RightHevron 
                    className='arrow-hevron black'
                  />
                </div>
              </a>
              <img
                src={slideTwo}
                className='d-block w-100'
                alt='Twój styl. Niepowtarzalny. Keune DEISGN'
              />
            </div>
          </div>
          <div className='controls position-absolute d-flex flex-column'>
            <button
              type='button'
              data-bs-target='#slider'
              data-bs-slide='prev'
            >
              <span
                className={this.props.active ? 'carousel-control-prev-icon' : 'carousel-control-prev-icon black'}
                aria-hidden='true'
              >
              </span>
              <span className='visually-hidden'>
                Previous
              </span>
            </button>
            <button
              type='button'
              data-bs-target='#slider'
              data-bs-slide='next'
            >
              <span
                className={this.props.active ? 'carousel-control-next-icon' : 'carousel-control-next-icon black'}
                aria-hidden='true'
              >
              </span>
              <span className='visually-hidden'>
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Slider