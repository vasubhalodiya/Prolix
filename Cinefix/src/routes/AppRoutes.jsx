import { Routes, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import Movies from '../pages/navbar/Movies';
import Series from '../pages/navbar/Series';
// etc...

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Movies />} />
        <Route path="series" element={<Series />} />
        {/* Add other routes here */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
