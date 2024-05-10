import React from 'react' 
import ReactDOM from 'react-dom/client'

// above two are the default libraries used by react to push all the essentital parameters by creating component
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

