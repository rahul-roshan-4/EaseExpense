import React from 'react'
import './Home.css'
import Feature from '../Feature/Feature'
import Footer from '../Footer'
const Home = () => {
  return (
    <>
    <section id="hero-section">
        <div className="hero-text">
         <h1>"Your money, your rules. <span style={{color:"aqua"}}>expenseEase</span> Transforming the way you manage expenses, one smart choice at a time."</h1>
        </div>
        <div className="hero-banner">
        </div>
    </section>
    <Feature/>
    <Footer/>
    </>
  )
}

export default Home