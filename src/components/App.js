
import React from 'react';
import {useState} from 'react';
import '../styles/App.css';
import Review from './Review';

const App = () => {
  return (
    <section className='container'>
      <h1 id='review-heading'>Our Reviews</h1>
      <main>
        <Review />
      </main>
    </section>
  )
}

export default App