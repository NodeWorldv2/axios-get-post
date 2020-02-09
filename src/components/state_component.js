import React, { Component } from 'react';

class state_component extends Component {

    constructor(props){
        super(props)

        this.state = {
            value: 100,
            color: 'black'
        }

    }

    decrease =()=>{
        this.setState({
            value: this.state.value-2
        })

    }
    increase =()=>{
        this.setState({
            value: this.state.value+2
        })

    }


    render() {
        return (
            <div>
               <h6>----- ~^~ -----</h6>
        <h6><span><button onClick={this.increase}>+</button></span> <span>{ this.state.value}</span> <span>
            <button onClick={this.decrease}>-</button></span></h6>
                
            </div>
        );
    }
}

export default state_component;