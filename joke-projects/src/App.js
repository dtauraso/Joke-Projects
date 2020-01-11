import React from 'react';
import Cat from './components/Cat'
import './App.css';
import { fakeAppCrash } from './reducers/catReducer'
function App() {
  return (
    <div className="App">
      <Cat />
      {/* not going to work */}
      {/* {fakeAppCrash()} */}
    </div>
  );
}

export default App;
