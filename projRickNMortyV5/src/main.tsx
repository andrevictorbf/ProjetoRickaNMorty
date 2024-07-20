import React from 'react'
import ReactDOM from 'react-dom/client'
import { Characters, Episodes } from './Pages'
import { Wrapper } from './Shared/Wrapper/Wrapper'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          
          <Route path="personagens" element={<Characters />} />
          <Route path="episodios" element={<Episodes />} />
          <Route path="localizacoes" element={<div>Localizações</div>} />

        </Route>
      </Routes>
    </BrowserRouter>
    <Outlet />
  </React.StrictMode>
  
);
