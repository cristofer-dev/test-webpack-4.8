import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'


import './assets/css/bootstrap.css'
import './assets/css/base.css'
import App from './components/App'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'))
