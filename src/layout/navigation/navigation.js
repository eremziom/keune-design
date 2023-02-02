import React, { Component } from "react"
import {ReactComponent as Logo} from '../../assets/logo_KEUNE.svg'
import {ReactComponent as LogoWhite} from '../../assets/logo_KEUNE_WHITE.svg'
import {ReactComponent as Fb} from '../../assets/fb.svg'
import {ReactComponent as FbWhite} from '../../assets/fb_WHITE.svg'
import {ReactComponent as Insta} from '../../assets/insta.svg'
import {ReactComponent as InstaWhite} from '../../assets/insta_WHITE.svg'
import {ReactComponent as Twitter} from '../../assets/twitter.svg'
import {ReactComponent as TwitterWhite} from '../../assets/twitter_WHITE.svg'
import {ReactComponent as Yt} from '../../assets/yt.svg'
import {ReactComponent as YtWhite} from '../../assets/yt_WHITE.svg'

class Navigation extends React.Component{
  constructor (props) {
    super(props)
    this.state = { slider: document.getElementById('slide1')}
  }

  render(){
    return(
      <header style={{position: "absolute", top: 0, width: "100%", maxWidth: "1200px", zIndex: "1000"}}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {this.props.active ? <LogoWhite /> : <Logo />}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${this.props.active ? "menuWhite" : "menuBlack"}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Nowości</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Produkty
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Odzież</a></li>
                    <li><a className="dropdown-item" href="#">Biżuteria</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Trendy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">O firmie</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Salony</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Dystrybutorzy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Kontakt</a>
                </li>
                <li className="">
                  <div className="media-container" role="search">
                    <a href="#" className="fb-link">
                      {this.props.active ? <FbWhite height="16px" width="16px" /> : <Fb height="16px" width="16px"/>}
                    </a>
                    <a href="#" className="insta-link">
                      {this.props.active ? <InstaWhite height="16px" width="16px"/> : <Insta height="16px" width="16px"/>}
                    </a>
                    <a href="#" className="twitter-link">
                      {this.props.active ? <TwitterWhite height="16px" width="16px"/> : <Twitter height="16px" width="16px"/>}
                    </a>
                    <a href="#" className="yt-link">
                      {this.props.active ? <YtWhite height="16px" width="16px"/> : <Yt height="16px" width="16px"/>}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navigation