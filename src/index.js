import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App'
import MainRouter from './components/MainRouter'

ReactDOM.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
  document.getElementById('root')
)
