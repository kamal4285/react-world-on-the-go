import { Suspense } from 'react'
import './App.css'
import Countries from './Countries'

const countriesPromiss = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {
  return (
    <>
    <Suspense fallback = {<p>Waiting for message...</p>}>
      <Countries countriesPromiss = {countriesPromiss}></Countries>
    </Suspense>
      
    </>
  )
}

export default App
