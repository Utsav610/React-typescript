import React from 'react';
import logo from './logo.svg';
import './App.css';
import words from './wordList.json'
import { useState } from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
  
 
  return (
    <>
      <Todo/>
      <TodoList/>
    </>
  );
}

export default App;
