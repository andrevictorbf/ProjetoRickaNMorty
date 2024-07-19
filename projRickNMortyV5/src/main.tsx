import React from 'react'
import ReactDOM from 'react-dom/client'
import { Characters } from './Pages'
import { Wrapper } from './Shared/Wrapper/Wrapper'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Wrapper/>
    <Characters />
  </React.StrictMode>,
)
