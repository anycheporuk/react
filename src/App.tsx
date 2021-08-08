import React, { FC } from 'react';
import './App.scss';
import { Counter } from './components/Counter';

export const App: FC = () => {

  return (
    <div className='App'>
      <Counter/>
    </div>
  );
};

