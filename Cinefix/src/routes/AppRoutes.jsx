// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from '../pages/navbar/Movie/Movies';
import Series from '../pages/navbar/Series/Series';
import TVshows from '../pages/navbar/Tvshows/TvShows';
import Discovery from '../pages/menu/Discovery/Discovery';
import Search from '../pages/menu/Search/Search';
import Category from '../pages/menu/Category/Category';
import TopRated from '../pages/menu/TopRated/TopRated';
import MyBackpack from '../pages/library/MyBackpack/MyBackpack';
import RecentPlayed from '../pages/library/RecentPlayed/RecentPlayed';
import Setting from '../pages/library/Setting/Setting';
import MovieDetails from '../components/MovieDetails/MovieDetails';

const AppRoutes = () => {
  return (
      <Routes>
        {/* Define routes for all the pages */}
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/tvshows" element={<TVshows />} />
        <Route path="/" element={<Discovery />} />
        <Route path="/search" element={<Search />} />
        <Route path="/category" element={<Category />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/mybackpack" element={<MyBackpack />} />
        <Route path="/recentplayed" element={<RecentPlayed />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/toprated/:movieId" element={<MovieDetails />} />

      </Routes>
  );
};

export default AppRoutes;
