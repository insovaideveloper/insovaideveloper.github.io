import React from 'react';
import headerStyle from '../styles/Header.module.css'
const Header = () => {
  return (
    <div>
        <h1 className={headerStyle.title}>
            <span>Web Dev</span>News
        </h1>
    </div>
  )
};

export default Header;
