import React, { Component } from 'react';
import axios from 'axios'

const initialState = {
    name:'ad',
    email: 'a@gmail.com',
    password: '',
    bio: 'this is adil reza'
}


class Postaxios extends Component {

    state = initialState;
    
    changeHandeler = event =>{

        this.setState({
            [event.target.name]: event.target.value
        })

    };



    submitHandeler = event =>{
        event.preventDefault()
        console.log(this.state)

        this.setState({
            ... initialState
        })
    };





    render() {
        console.log("Render function call")
        return (
            <div className="row">
                    <div className="col-md-6">

                        <form onSubmit={this.submitHandeler}>
                            <div className="form-group">
                            <label htmlFor="name">Enter your name</label>
                            <input onChange={this.changeHandeler} type="text" name="name" id="name" value={this.state.name} className="form-control" placeholder="" aria-describedby="helpId"/>
                            
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Enter Your email </label>
                            <input onChange={this.changeHandeler} type="email" name="email" id="email" value={this.state.email} className="form-control" placeholder="" aria-describedby="helpId"/>
                            
                            </div>
                            <div className="form-group">
                            <label htmlFor="password">Choose a password</label>
                            <input required onChange={this.changeHandeler} type="password" name="password" id="password" value={this.state.password} className="form-control" placeholder="" aria-describedby="helpId"/>
                            
                            </div>
                            <div className="form-group">
                            <label htmlFor="bio">your bio data </label>
                            <textarea onChange={this.changeHandeler} type="text" name="bio" id="bio" value={this.state.bio} className="form-control" placeholder="" aria-describedby="helpId">
                                </textarea>
                            
                            </div>
                        
                        <button type="submit" name="submit" className="btn btn-primary">Submit</button>


                        </form>

                    </div>
                    
            </div>
        );
    }
}

export default Postaxios;