import './App.css';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
// import Footer from './components/Footer/Footer';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
