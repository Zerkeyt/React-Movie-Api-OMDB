import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MovieAPI from './components/MovieApi/MovieAPI.jsx'

function App() {
  return (
    <div className="App">
     <Header/>
      <main>
        <MovieAPI/>
      </main>
     <Footer/>
    </div>
  )
}


export default App
