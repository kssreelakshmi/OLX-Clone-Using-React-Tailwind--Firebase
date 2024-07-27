import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirebaseContext } from './store/FirebaseContext.jsx'
import Firebase from './Firebase/FirebaseConfig.js'
import AuthContexts from './store/FirebaseContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={Firebase}>
      <AuthContexts>
        <Router>
          <App />
        </Router>
      </AuthContexts>
    </FirebaseContext.Provider>
  </React.StrictMode>,
)
