// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from '../pages/navbar/Movie/Movies';
import Series from '../pages/navbar/Series/Series';
import Sports from '../pages/navbar/Sports/Sports';
import TVshows from '../pages/navbar/Tvshows/TvShows';
import Download from '../pages/library/Download/Download';
import MyBackpack from '../pages/library/MyBackpack/MyBackpack';
import Setting from '../pages/library/Setting/Setting';
import Category from '../pages/menu/Category/Category';
import Discovery from '../pages/menu/Discovery/Discovery';
import Search from '../pages/menu/Search/Search';
import TopRated from '../pages/menu/TopRated/TopRated';

const AppRoutes = () => {
  return (
      <Routes>
        {/* Define routes for all the pages */}
        <Route path="/" element={<Discovery />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/tvshows" element={<TVshows />} />
        <Route path="/download" element={<Download />} />
        <Route path="/mybackpack" element={<MyBackpack />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/category" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/toprated" element={<TopRated />} />
        
      </Routes>
  );
};

export default AppRoutes;
