import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import New from './components/New'
import Side from './components/Side'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <New />
    <Side />
    
  </React.StrictMode>,
)
