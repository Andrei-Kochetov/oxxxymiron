import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';

const AppRoutes = () => {
  return <main className='main-content'> <Routes>
    <Route path='/' element={<Home />}></Route>
  </Routes></main>;
};

export default AppRoutes