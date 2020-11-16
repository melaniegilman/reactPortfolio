import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import './App.css';

function App() {

  return (
    <div>
      <main>
        <Header></Header>
 
        <Navigation />
        <Footer />
      </main>
    </div>
  );
}

export default App;