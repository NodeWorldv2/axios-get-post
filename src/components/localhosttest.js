import React, { Component } from 'react';
import axios from 'axios'

class localhosttest extends Component {
    state = {
        datas: []
    }


componentDidMount() {
    axios.get('http://127.0.0.1:8000/restapi/adil/test/')
        .then(response => {
            this.setState({
                datas:response.data
            })
        })
        .catch(error=>console.log(error))
}


    render() {
        let {datas}=this.state;
        return (
            <div>
                {datas.map(data=> <li className='list-group-item'>{data.email} </li>)}
            </div>
        );
    }
}

export default localhosttest;