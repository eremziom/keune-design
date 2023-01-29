import React, { Component } from "react"
import {ReactComponent as Logo} from '../../assets/logo_KEUNE.svg'
import {ReactComponent as LogoWhite} from '../../assets/logo_KEUNE_WHITE.svg'

class Navigation extends React.Component{
  constructor (props) {
    super(props)
    this.state = { slider: ''}
  }
  
  // componentDidMount() {
  //   console.log('zamontowany', document.getElementById('slide1'))
  //   this.setState({slider: document.getElementById('slide1')})
  // }

  render(){
    return(
      <header style={{position: "absolute", top: 0, width: "100%", maxWidth: "1200px", zIndex: "1000"}}>
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <LogoWhite />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Nowości</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Produkty
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
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
              </ul>
              <form className="" role="search">
                <button className="btn btn-outline-success" type="submit">IKONY</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navigation