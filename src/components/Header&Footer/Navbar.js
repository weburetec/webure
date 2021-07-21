import React, { Component } from 'react'
import './header&footer.css'
import logo from "./logo.png"
//import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';


export default class Navbar extends Component {
    state = {
        navCollapsed: true
      }
    
    _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed })
    }    
    render() {
        const {navCollapsed} = this.state

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light navbackground">
                <div className="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src={logo} width="40" height="40" class="d-inline-block align-top" alt="logo"/>
                        <span style={{color:"#000000",fontWeight:"500",fontSize:"25px"}}>Webure</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="toggler" aria-expanded="false" aria-label="Toggle navigation" onClick={this._onToggleNav}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'} >
                    <div class="navbar-nav d-flex justify-content-between" style={{fontWeight:"500",fontSize:"20px"}}>
                        <a class="nav-link active" style={{color:"#f54b08"}} href="/">
                        Home
                        <span class="sr-only">(current)</span>
                        </a>
                        <a class="nav-link" href="/about-us" >About Us</a>
                        <a class="nav-link" href="/" >Services</a>
                        <a class="nav-link" href="/career" >Career</a>
                        <a class="nav-link" href="/gallery" >Clienentlee</a>
                        <div className="text-center">
                        <button className="navbutton1">Contact Us <i class="fa fa-long-arrow-alt-right"></i></button>
                        </div>
                    </div>
                    </div>                    
                </div>
            </nav>
            </div>
        )
    }
}
