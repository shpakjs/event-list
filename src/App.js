import React from 'react';
import EventsList from './components/EventsList/EventsList';
import './App.css';

const appData = require('./dataset.json');

function App() {
  return (
    <div className="App">
      <EventsList events={ appData.activities }/>
    </div>
  );
}

export default App;
