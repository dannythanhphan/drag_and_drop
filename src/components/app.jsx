import React from 'react';
import Reward from './reward';
import Category from './category';

const App = () => (
  <div className="board-container">
    <Reward />
    <Category id={11}/>
    <Category id={12}/>
    <Category id={13}/>
    <Category id={14}/>
    <Category id={15}/>

  </div>
);

export default App;
