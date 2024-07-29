import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Characters, Episodes, Locations, LocationDetail  } from './Pages/'; 
import EpisodeDetail from './Pages/episodeDetail/EpisodeDetail';
import CharDetail from './Pages/charDetail/CharDetail';
import { Wrapper } from './Shared/Wrapper/Wrapper';
import './index.scss';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/personagens" />} />
        <Route path="personagens" element={<Wrapper />}>
          <Route index element={<Characters />} />
        </Route>
        <Route path="episodios" element={<Wrapper />}>
          <Route index element={<Episodes />} />
        </Route>
        <Route path="localizacoes" element={<Wrapper />}>
          <Route index element={<Locations />} />
        </Route>
        <Route path="character/:id" element={<CharDetail />} />
        <Route path="episode/:id" element={<EpisodeDetail />} />
        <Route path="location/:id" element={<LocationDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
