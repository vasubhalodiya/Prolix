// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Movies from '../pages/navbar/Movie/Movies';
import Series from '../pages/navbar/Series/Series';
import TVshows from '../pages/navbar/Tvshows/TvShows';
import Subscribe from '../pages/navbar/Subscribe/Subscribe';
import Profile from '../pages/navbar/Profile/Profile';
import Discovery from '../pages/menu/Discovery/Discovery';
import Search from '../pages/menu/Search/Search';
import TopRated from '../pages/menu/TopRated/TopRated';
import MyBackpack from '../pages/library/MyBackpack/MyBackpack';
import Setting from '../pages/library/Setting/Setting';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import PaymentSuccessfull from '../pages/navbar/PaymentSuccessfull/PaymentSuccessfull';
import ProtectedPage from '../pages/navbar/protected/ProtectedPage';
import ProtectedRoute from './ProtectedRoute';
import { useSelector } from 'react-redux';


const AppRoutes = () => {
  const isSubscribed = localStorage.getItem('subscribed') === 'true';


  return (
    <Routes>
      {/* Define routes for all the pages */}
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/tvshows" element={<TVshows />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Discovery />} />
      <Route path="/search" element={<Search />} />
      <Route path="/toprated" element={<TopRated />} />
      <Route path="/mybackpack" element={<MyBackpack />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/toprated/:movieId" element={<MovieDetails />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      <Route path="/series/:movieId" element={<MovieDetails />} />
      <Route path="/tvshows/:movieId" element={<MovieDetails />} />
      <Route path="/moviedetails/:movieId" element={<MovieDetails />} />
      <Route path="/:contentType/:movieId" element={<MovieDetails />} />
      <Route path="/paymentsuccessfull" element={<PaymentSuccessfull />} />
      <Route path="/premium" element={
        <ProtectedRoute>
          <ProtectedPage />
        </ProtectedRoute>
      } />
      {/* <Route path="/paymentsuccessfull" element={isSubscribed ? <Navigate to="/" /> : <Discovery />} /> */}
    </Routes>
  );
};

export default AppRoutes;
