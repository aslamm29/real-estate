import React, { Component } from 'react'

class Header extends Component {
    constructor(){
        super()
        this.state={
            name: "Aslam"
        }
    }

    render(){
        return(<section className="listings">
            Listings
        </section>)
    }
}

export default Header