import React from 'react';
import './Flex.css';
import Add from './Add';
import List from './List';

function Root() {
  return (
    <div className="container">
      <div className="left-box">
        <List />
      </div>
      <div className="right-box">
        <Add />
      </div>
    </div>
  );
}

export default Root;
