import Header from '../Header/Header'
import Footer from "../Footer/Footer";
import AppRoutes from '../App/AppRoutes'

import '../../styles/index.scss'

const App = () => {
  return (
    <div className='app container'>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
};

export default  App