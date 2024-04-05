import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { MovieDetail } from "./pages/MovieDetail";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieBooking from "./pages/MovieBooking";

const App = () => {
  const location = useLocation();
  const showNav = !(
    location.pathname === "/signup" || location.pathname === "/signin"
  );
  return (
    <>
      {showNav && <Navbar />}
      <>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/booking" element={<MovieBooking />} />
        </Routes>
      </>
    </>
  );
};

export default App;
