import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BestSellers from "./pages/Dashboard/BestSellers";
import Dashboard from "./pages/Dashboard/DashBoard";
import Users from "./pages/Dashboard/Users";
import GigDetails from "./pages/GigDetails/GigDetails";
import Home from "./pages/Home/Home/Home";
import JobDetails from "./pages/JobSection/Jobs/JobDetails";
import Jobs from "./pages/JobSection/Jobs/Jobs";
import Login from "./pages/Login/Login";
import SellerDetails from "./pages/SellerDetails/SellerDetails";
import Footer from "./pages/shared/Footer/Footer";
import NavigationBar from "./pages/shared/NavigationBar/NavigationBar";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobDetails" element={<JobDetails />} />
          <Route path="seller-profile" element={<SellerDetails />} />
          <Route path="gig_details" element={<GigDetails />} />
          <Route path="seller-profile" element={<SellerDetails />} />
          <Route path="gig_details" element={<GigDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />

          {/* dashboard starts */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route exact path="/dashboard" element={<Users></Users>} />
            <Route path={`/dashboard/allUsers`} element={<Users></Users>} />
            <Route
              path={`/dashboard/bestSellers`}
              element={<BestSellers></BestSellers>}
            />
          </Route>
          {/* dashboard ends */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
