import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TopList from './TopList'
import App from './App'

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/top-list" element={<TopList />} exact />
      </Routes>
    </Router>
  )
}

export default MainRouter
