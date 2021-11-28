import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import TopAnime from './components/TopAnime'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/top-anime" element={<TopAnime />} exact />
      </Routes>
    </Router>
  )
}

export default App
