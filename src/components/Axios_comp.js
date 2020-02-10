import React, { Component } from 'react';
import axios from 'axios'


   

class Axios_comp extends Component {

    state = {
        posts: []
    }


componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                posts:response.data
            })
        })
        .catch(error=>console.log(error))
}


  render(){

    let {posts}=this.state;


      if(posts.length===0){
          return (
            <div className="App">
                <h1>Loading....</h1>
            </div>
          );
      }
      else {
        console.log(posts);
        return (
          <div className="App">

            {/* {posts.name} */}

            {posts.map(post=> <li className='list-group-item'>{post.name} </li>)}
          </div>
        );
      }

    }
}

export default Axios_comp;