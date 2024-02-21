import { Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage/HomePage';
import TourPage from '../pages/TourPage/TourPage';
import TracksPage from '../pages/TracksPage/TracksPage';
import NewsPage from '../pages/NewsPage/NewsPage';

const AppRoutes = () => {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tour" element={<TourPage />}></Route>
        <Route path="/atracks" element={<TracksPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
      </Routes>
    </main>
  );
};

export default AppRoutes;
