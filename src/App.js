import React,{Component} from 'react';
import './App.css';
import axios from 'axios'

import {BrowserRouter,Router, Switch, Route, Link}  from "react-router-dom"


import NewComponent from './components/new_components';
import Axiostest from './components/state_component';
import Axiosfetch from './components/Axios_comp'
import PostAxios from './components/form/postaxios'
import PostAxios2 from './components/form/postaxios2'
import LocalhostTest from './components/localhosttest'
import Postaxioslocal from './components/form/postaxioslocal'
import ImageFile from './components/imagefile/imagefile'


class App extends Component{

        render(){
          return(

            <BrowserRouter>
            <div className="App">
      
              <Route path="/image" component = {ImageFile}/>
              
            
            </div>
          </BrowserRouter>
            
          )
        }

}

export default App;
