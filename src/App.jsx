import React from 'react'
import { Route,Routes } from 'react-router-dom'
import List from './pages/List'
import Login from './pages/Login'
import Details from './pages/Details'
import Analytics from './pages/Analytics'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/' element={<List/>} />
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/analytics' element={<Analytics/>} />
    </Routes>
  )
}

export default App