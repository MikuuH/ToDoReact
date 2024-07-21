import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import InfoComp from './component/InfoComp'
import { ways, differences } from './component/info';

function App() {

  return (
    <>
    <Header />
    <Footer />
    <InfoComp info={{ ways, differences }}/>
    </>
  )
}

export default App
