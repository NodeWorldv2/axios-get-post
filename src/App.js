import React,{Component} from 'react';
import './App.css';
import axios from 'axios'


import NewComponent from './components/new_components';
import Axiostest from './components/state_component';
import Axiosfetch from './components/Axios_comp'
import PostAxios from './components/form/postaxios'
import PostAxios2 from './components/form/postaxios2'
import LocalhostTest from './components/localhosttest'
import Postaxioslocal from './components/form/postaxioslocal'



class App extends Component{

        render(){
          return(
            <div className="App">

                <div className="row">

                  {/* <div className="col-md-6">
                    <PostAxios/>
                  </div>
                  <div className="col-md-6">
                    <PostAxios2/>
                  </div> */}

                  <Postaxioslocal/>

                  <LocalhostTest/>

                
                </div>
              
              
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
