import React, { Component } from 'react'

class Filter extends Component {
    constructor(){
        super()
        this.state={
            name: "Aslam"
        }
    }

    render(){
        return(<section className="filter">
            Filter
        </section>)
    }
}

export default Filter