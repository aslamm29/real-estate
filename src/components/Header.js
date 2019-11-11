import React, { Component } from 'react'


class Header extends Component {
    constructor(){
        super()
        this.state={
            name: "Aslam"
        }
    }

    render(){
        return(<header>
            <div className="logo">Real Estate</div>

            <nav>
                <a href='#'>Create Ads</a>
                <a href='#'>About Us</a>
                <a href='#'>Log In</a>
                <a href='#' className="register-btn">Register</a>
            </nav>
            </header>)
    }
}

export default Header