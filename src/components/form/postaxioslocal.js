import React, { Component } from 'react';
import axios from 'axios'

const secondState = {
    name : '-t-',
    email : '-b-',
}

const BASEURL = 'http://127.0.0.1:8000/restapi/adil/test/';


class postaxios2 extends Component {

    state = secondState;
    
    changeHandeler2 = event2 =>{
        this.setState({
            [event2.target.name]: event2.target.value
        })
    };

    submitHandeler2 = event3 =>{
        event3.preventDefault()
        console.log(this.state)

        axios.post(`${BASEURL}`, this.state)
            .then(res=>{
                console.log(res.data)
            })
            .catch(error=>{
                console.log(error)
            })

    };

    render() {
        return (
            <div>
                <div className="col-md-12">
                        <form onSubmit = {this.submitHandeler2}>

                            <div className="form-group">
                              <label htmlFor="title">Here name</label>
                              <input onChange={this.changeHandeler2} type="text" name="name" id="title" value={this.state.name} className="form-control" placeholder="" aria-describedby="helpId"/>
                             
                            </div>

                            <div className="form-group">
                              <label htmlFor="body">Here email</label>
                              <input onChange={this.changeHandeler2} type="email"  name="email" id="body" value={this.state.email} className="form-control" placeholder="" aria-describedby="helpId"/>
                             
                            </div>



                            <button type="submit" name="submit2" className="btn btn-danger">Second Submit</button>

                        </form>

                    </div>
                
            </div>
        );
    }
}

export default postaxios2;