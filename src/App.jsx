import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import JobListing from "./JobListing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import JobDetail from "./pages/JobDetail";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/jobs" element={<JobListing />} />
            {/* <Route path="/contact" element={<h1>Contact Page</h1>} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
