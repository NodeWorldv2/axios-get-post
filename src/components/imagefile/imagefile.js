import React, { Component } from 'react'
import axios from "axios"

export default class Imagefile extends Component {
    
    state = {
        title: '',
        image: null
      }

      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      };

      handleImageChange = (e) => {
        this.setState({
          image: e.target.files[0]
        })
      };

      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
        form_data.append('title', this.state.title);
        let url = 'http://127.0.0.1:8000/eknojor/api/v1/book/';
        axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
            .then(res => {
              console.log(res.data);
            })
            .catch(err => console.log(err))
      };


    render() {
        return (
            <div>
                <h1>hello Image</h1>
                <hr></hr>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} className="form-control"/>
                    <input type="file" name="image" id="image" onChange={this.handleImageChange} className="form-control"/>
                    <br></br>
                    <input type="submit" className="btn btn-success "/>

                </form>
                
            </div>
        )
    }
}
