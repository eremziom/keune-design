import React from 'react'
import {ReactComponent as RightHevron} from '../../assets/right_hevron.svg'

class O2image extends React.Component {

  render() {
    return(
      <div className={`${this.props.className} position-relative image-container`}>
        <img
          src={this.props.photo}
          className={this.props.shape}
          alt={`KEUNE ${this.props.name}`}
        />
        <div className={`image-title${this.props.size}`}>
          <span className='d-block'>
            KEUNE
          </span>
          <span>
            {this.props.name}
          </span>
        </div>
        <div className={`photo-button${this.props.size}`}>
          <a
            href='#'
            className='d-flex align-items-center'
          >
            <div className='line'>
            </div>
            <span>
              ODKRYJ SERIE
            </span>
            <RightHevron />
          </a>
        </div>
      </div>
    )
  }
}

export default O2image