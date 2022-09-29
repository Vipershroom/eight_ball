import React from 'react';
import Header from './Header';
import './styles/App.scss'

function App() {
  return (
    <div className='main'>
      <Header />
      <h1>
        Welcome to 8 Ball
      </h1>
      <div className="prompt">
        <h2>Please ask a question!</h2>
        <div className="field">
          <input type="text" name="" id="inp" />
        </div>
            </div>
      </div>
  );
}

export default App;
