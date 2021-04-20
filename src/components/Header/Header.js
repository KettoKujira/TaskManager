import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header_title'>Taskmanager</h1>
      <button className='header_button'>New task +</button>
      <span className='header_date'>Today is 19 april 2021</span>
    </header>
  );
};

export default Header;