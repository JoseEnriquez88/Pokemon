import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Footer from "./components/Footer/Footer";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.baseURL = "https://pokemon-production-59d7.up.railway.app/";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const isCreatePage = location.pathname === "/create";
  const isDetailPage = location.pathname === "/detail/";

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {(isHomePage || isCreatePage || isDetailPage) && <Footer />}
    </div>
  );
};

export default App;
