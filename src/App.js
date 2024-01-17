// src/App.js
import React, { useContext } from 'react'
import { UserProvider, UserContext } from './UserContext'

function App() {
  const { user, login, logout } = useContext(UserContext)

  return (
    <div className='App'>
      <h1>React ........ API Demo</h1>
      {user ? (
        <>
          <p>Wel...., {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Login to continue</p>
          <button onClick={() => login('user123')}>Login</button>
        </>
      )}
    </div>
  )
}

function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  )
}

export default AppWrapper
