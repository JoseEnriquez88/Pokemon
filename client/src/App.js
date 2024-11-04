import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Footer from "./components/Footer/Footer";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";

// axios.defaults.baseURL = "https://pokemon-production-59d7.up.railway.app/";
axios.defaults.baseURL = "http://localhost:3001";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const isCreatePage = location.pathname === "/create";
  const isDetailPage = location.pathname === "/detail/";

  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {(isHomePage || isCreatePage || isDetailPage) && <Footer />}
    </main>
  );
};

export default App;
