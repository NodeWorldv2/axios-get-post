import React,{Component} from 'react';
import './App.css';
import axios from 'axios'


import NewComponent from './components/new_components';
import Axiostest from './components/state_component';
import Axiosfetch from './components/Axios_comp'
import PostAxios from './components/form/postaxios'


class App extends Component{

        render(){
          return(
            <div className="App">
            
              <PostAxios/>
              
            </div>
          )
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
