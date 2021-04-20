import React from 'react';
import './Main.css'

const Main = () => {
  return (
    <main className='main'>
      <h2 className='main_title'>What's up today?</h2>
      <div className='main_card'>
        <span className='card_date'>19 april 2021</span>
        <h3 className='card_title'>Learn to code</h3>
        <p className='card_descr'>Today i will learn how to manage store.</p>
        <button className='card_button'>Delete</button>
      </div>
    </main>
  );
};

export default Main;