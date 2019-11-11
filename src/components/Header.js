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
            <div>Logo</div>

            <nav>
                <a href='#'>create ads</a>
                <a href='#'>about us</a>
                <a href='#'>log in</a>
                <a href='#' className="register-btn">Register</a>
            </nav>
            </header>)
    }
}

export default Header