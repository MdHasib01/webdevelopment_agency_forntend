import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GigDetails from "./pages/GigDetails/GigDetails";
import Home from "./pages/Home/Home/Home";
import SellerDetails from "./pages/SellerDetails/SellerDetails";
import NavigationBar from "./pages/shared/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="seller-profile" element={<SellerDetails />} />
          <Route path="gig_details" element={<GigDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
