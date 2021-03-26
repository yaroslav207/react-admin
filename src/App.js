import React from 'react'
import './App.css';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest'
import PizzaList from './components/PizzaList'


function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:5000/api')}>
      <Resource name="pizza" list={PizzaList}/>
    </Admin>
  );
}

export default App;
