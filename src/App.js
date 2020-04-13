import React from 'react';
import styled from 'styled-components'
import './App.css';
import ben from './images/humberBridge.JPG'

export default function App() {
  return (
    <Welcome className="App">
      <h2>Hello, my name is Ben</h2>
      <div className='image'>
        <img src={ben} alt='ben' />
      </div>
      <h6>I live in Aberdeen</h6>
    </Welcome>
  );
}

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 20px;
    color: #ffa500;
  }

  h6 {
    color: #ffa500;
    margin-top: 40px;
  }
  
  .image {
    display: flex;
    max-width: 60%;
    max-height: 60%;
  }

  img {
    border: 10px solid #005AFF;
    border-radius: 100px;
    padding: 30px;
    width: 100%;
    height: auto;
  }
`