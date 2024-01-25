import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import {setupStore} from './store/reducer'

const store=setupStore()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <App />

);
