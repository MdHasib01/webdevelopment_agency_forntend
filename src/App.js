import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import JobDetails from "./pages/JobSection/Jobs/JobDetails";
import Jobs from "./pages/JobSection/Jobs/Jobs";
import NavigationBar from "./pages/shared/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobDetails" element={<JobDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
