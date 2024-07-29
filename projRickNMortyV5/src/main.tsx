import React from 'react'
import ReactDOM from 'react-dom/client'
import { Characters, Episodes, Home, LocationDetail, Locations } from './Pages'
import { Wrapper } from './Shared/Wrapper/Wrapper'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharDetail from './Pages/charDetail/CharDetail'
import EpisodeDetail from './Pages/episodeDetail/EpisodeDetail'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="personagens" element={<Characters />} />
          <Route path="episodios" element={<Episodes />} />
          <Route path="localizacoes" element={<Locations/>} />
          <Route path="character/:id" element={<CharDetail />} />
          <Route path="episode/:id" element={<EpisodeDetail />} />
          <Route path="location/:id" element={<LocationDetail/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);
