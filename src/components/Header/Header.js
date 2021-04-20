import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header_title'>Taskmanager</h1>
      <button className='header_button'><span className='button_text'>New task +</span></button>
      <span className='header_date'>Today is
      <span className='header_date--color'> 19 april 2021</span>
      </span>
    </header>
  );
};

export default Header;