import React from 'react'
import ReactDOM from 'react-dom/client'
import { Characters, Episodes } from './Pages'
import { Wrapper } from './Shared/Wrapper/Wrapper'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />} >
          <Route index element={<Characters />} />
          <Route path="/episodios" element={<Episodes />} />
          <Route path="/localizacoes" element={<div>Localizacoes</div>} />
        </Route>
      </Routes>


    </BrowserRouter>
  </React.StrictMode>,
)
