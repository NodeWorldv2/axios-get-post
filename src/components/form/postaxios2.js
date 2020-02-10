import React, { Component } from 'react';
import axios from 'axios'

const secondState = {
    title : '-t-',
    body : '-b-',
    userId : '7789'
}

const BASEURL = 'https://jsonplaceholder.typicode.com';


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

        axios.post(`${BASEURL}/posts`, this.state)
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
                <div className="col-md-6">
                        <form onSubmit = {this.submitHandeler2}>

                            <div className="form-group">
                              <label htmlFor="title">Here Title</label>
                              <input onChange={this.changeHandeler2} type="text" name="title" id="title" value={this.state.title} className="form-control" placeholder="" aria-describedby="helpId"/>
                             
                            </div>

                            <div className="form-group">
                              <label htmlFor="body">Here Body</label>
                              <input onChange={this.changeHandeler2} type="text"  name="body" id="body" value={this.state.body} className="form-control" placeholder="" aria-describedby="helpId"/>
                             
                            </div>



                            <button type="submit" name="submit2" className="btn btn-danger">Second Submit</button>

                        </form>

                    </div>
                
            </div>
        );
    }
}

export default postaxios2;