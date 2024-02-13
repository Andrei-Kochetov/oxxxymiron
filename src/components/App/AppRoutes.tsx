import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';

const AppRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home />}></Route>
  </Routes>;
};

export default AppRoutes