<<<<<<< HEAD
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from './components';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Publications from './pages/Publications'
import Lab from './pages/Lab'
import Repositories from './pages/Repositories'
import Teaching from './pages/Teaching'
import Team from './pages/Team'
import Services from './pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/publications" exact element={<Publications />} />
        <Route path="/lab" exact element={<Lab />} />
        <Route path="/repositories" exact element={<Repositories />} />
        <Route path="/teaching" exact element={<Teaching />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/services" exact element={<Services />} />
      </Routes>
    </>
  )
}

export default App
>>>>>>> 40de23ac0b49f1ecbb54e2e3be7923326bd6da61
