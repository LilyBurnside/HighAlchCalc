import React from 'react';
import logo from './logo.svg';
import Title from'../Title/Title';
import Item from '../Item/Item';

import './App.css';


function App() {
  return (
    <div className="App">
      <main className='app main'>
        <Title />
        <Item />
      </main>
    </div>
  );
}

export default App;
