import React from 'react';
import './App.css';

import NewComponent from './components/new_components';
import StateCom from './components/state_component';

function App() {
  return (
    <div className="App">
       <NewComponent/>
       <StateCom/>
    </div>
  );
}

export default App;
