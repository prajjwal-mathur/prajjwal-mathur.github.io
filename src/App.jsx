import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Tech from './components/tech/Tech'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Tech />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
