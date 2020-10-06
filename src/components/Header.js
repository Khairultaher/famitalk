import React from 'react';

const Header = (props) => {
  return (
    <div id="Header">
      <img src="./assets/icon.png" alt="logo" />
      <h1>FamiTalk</h1>
      {props.children}
    </div>
  );
};

export default Header;
