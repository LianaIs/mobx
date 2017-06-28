import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { extendObservable, autorun } from 'mobx';
import { observer } from 'mobx-react';
import store from './store';


const change_name = () => store.nums.push(Math.random());

const app = observer (() => (
  <div>
    <div>
      {store.nums.map(e => <p>|{e}|</p>)}
  </div>
  <button onClick={change_name}>Click me</button>
  </div>
));

export default app;
