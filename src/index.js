import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Logement from './pages/Logement'
import Propos from './pages/Propos'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import data from '../src/data/data.json'
import '../src/styles/pages/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/Logement/:id" element={<Logement data={data} />} />
        <Route path='/Propos' element={<Propos/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)