import { Route, Routes } from 'react-router-dom';
import Movies from '../pages/navbar/Movie/Movies';
import Series from '../pages/navbar/Series/Series';
import TVshows from '../pages/navbar/Tvshows/TvShows';
import Subscribe from '../pages/navbar/Subscribe/Subscribe';
import Profile from '../pages/navbar/Profile/Profile';
import Discovery from '../pages/menu/Discovery/Discovery';
import Search from '../pages/menu/Search/Search';
import TopRated from '../pages/menu/TopRated/TopRated';
import MyBackpack from '../pages/library/MyBackpack/MyBackpack';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import SubscribeNotify from '../components/SubscribeNotify/SubscribeNotify';
import PaymentSuccessfull from '../pages/navbar/PaymentSuccessfull/PaymentSuccessfull';
import PremiumPage from '../pages/navbar/Premium/PremiumPage';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from "../auth/AuthContext";
import Login from "../auth/Login";
import Signup from "../Auth/Signup";
import PrivateRoute from "../auth/PrivateRoute";

const AppRoutes = () => {
  const isSubscribed = localStorage.getItem('subscribed') === 'true';

  return (
    <AuthProvider>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/tvshows" element={<TVshows />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Discovery />} />
        <Route path="/search" element={<Search />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/mybackpack" element={<MyBackpack />} />
        <Route path="/toprated/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/series/:movieId" element={<MovieDetails />} />
        <Route path="/tvshows/:movieId" element={<MovieDetails />} />
        <Route path="/moviedetails/:movieId" element={<MovieDetails />} />
        <Route path="/:contentType/:movieId" element={<MovieDetails />} />
        <Route path="/paymentsuccessfull" element={<PaymentSuccessfull />} />
        <Route path="/subscribenotify" element={<SubscribeNotify />} />
        <Route path="/" element={
          <PrivateRoute>
            <Discovery />
          </PrivateRoute>
        } />
        <Route path="/premium" element={
          <ProtectedRoute redirectTo="/subscribe">
            <PremiumPage /> 
          </ProtectedRoute>
        }/>
        {/* <Route path="/subscribenotify" element={
          <ProtectedRoute redirectTo="/subscribenotify">
            <MovieDetails />
          </ProtectedRoute>
          } /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
