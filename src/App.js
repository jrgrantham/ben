import React from 'react';
import styled from 'styled-components'
import './App.css';
import ben from './images/humberBridge.JPG'

export default function App() {
  return (
    <Welcome className="App">
      <h1>Hello, my name is Ben</h1>
      <p>I go to cluny school</p>
      <div className='image'>
        <img src={ben} alt='ben' />
      </div>
    </Welcome>
  );
}

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .image {
    width: 80vw;
    height: 80vh;
    // border: 1px solid red;
  }
  
  img {
    border: 25px solid blue;
    padding: 20px;
    border-radius: 50px;
    max-width: 100%;
    max-height: 100%;
    // border: 1px solid red;
  }
`