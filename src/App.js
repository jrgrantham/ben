import React from 'react';
import styled from 'styled-components'
import './App.css';
import ben from './images/humberBridge.JPG'

export default function App() {
  return (
    <Welcome className="App">
      <h2>Hello, my name is Ben</h2>
      <h5>I live in Aberdeen</h5>
      <div className='image'>
        <img src={ben} alt='ben' />
      </div>
      <div className='interests'>
        <div className='list'>
          <h2>My hobbies</h2>
          <h5>remote control cars</h5>
          <h5>biking</h5>
          <h5>swimming</h5>
          <h5>camping</h5>
        </div>
        <div className='list'>
          <h2>Things I like</h2>
          <h5>bonfires</h5>
          <h5>holidays</h5>
          <h5>sweets</h5>
          <h5>Hull fair</h5>
        </div>
      </div>
      <div className='links'>
        <a href='https://jamesgrantham.me/'>visit my dad</a>
        <a href='https://samgrantham.netlify.com/'>visit my brother, Sam</a>
      </div>
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

  h5 {
    color: #ffa500;
    margin-bottom: 40px;
  }

  a {
    display: inline-block;
    color: #282c34;
    background-color: #ffa500;
    width: 350px;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 50px;
    font-weight: bold;
    transition: all 1s;

    &:hover {
      transform: scale(1.1)
    }
  }

  .links {
    display: flex;
    flex-direction: column;
  }
  
  .interests {
    display: flex;
    margin: 50px 0;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
  
  .list {
    border: 10px solid #ffa500;
    margin: 0 30px 0 30px;
    border-radius: 20px;
    width: 350px;

    @media (max-width: 1000px) {
      margin: 30px;
    }
  }
  
  .image {
    display: flex;
    max-width: 800px;
    max-height: 60%;
    // border: 30px solid #005AFF;
    border-radius: 50px;
    overflow: hidden;
    margin: 0 20px
  }

  img {
    width: 100%;
    height: 100%;
  }
`