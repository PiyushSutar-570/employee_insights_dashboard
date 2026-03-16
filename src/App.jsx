import React from 'react'
import { Route,Routes } from 'react-router-dom'
import List from './pages/List'
import Login from './pages/Login'
import Details from './pages/Details'
import Analytics from './pages/Analytics'
import ProtectedRoute from './components/ProtectedRoute'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />

      <Route path='/list' 
      element={
      <ProtectedRoute>
        <List/>
      </ProtectedRoute>} 
      />

      <Route path='/details/:id'
      element={
      <ProtectedRoute>
        <Details/>
      </ProtectedRoute>}
      />

      <Route path='/analytics' 
      element={
      <ProtectedRoute>
        <Analytics/>
      </ProtectedRoute>} 
      />

    </Routes>
  )
}

export default App