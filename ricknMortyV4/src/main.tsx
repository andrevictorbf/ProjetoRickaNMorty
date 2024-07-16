import React from 'react'
import ReactDOM from 'react-dom/client'
import { Character } from './Pages/Characters'
import { Wrapper } from './Shared/wrapper'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Wrapper/>
    <Character />
  </React.StrictMode>,
)
