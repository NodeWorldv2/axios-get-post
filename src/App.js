import React,{Component} from 'react';
import './App.css';
import axios from 'axios'


import NewComponent from './components/new_components';
import StateCom from './components/state_component';
import Axiostest from './components/state_component';


class App extends Component{

  state = {
    posts: []
}

componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
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
            {posts.map(post=> <li className='list-group-item'>{post.title} </li>)}
          </div>
        );
      }

    }
}

// function App() {
//   return (
//     <div className="App">
//        <NewComponent/>
//        <Axiostest/>
//     </div>
//   );
// }

export default App;
