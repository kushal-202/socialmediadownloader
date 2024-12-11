import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import YouTube from './pages/YouTube'
import Twitter from './pages/Twitter'
import Instagram from './pages/Instagram'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="youtube" element={<YouTube />} />
        <Route path="twitter" element={<Twitter />} />
        <Route path="instagram" element={<Instagram />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App