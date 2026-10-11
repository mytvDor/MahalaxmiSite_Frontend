
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AbhishekBooking from "./userComponents/AbhishekBooking";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./userComponents/CommanComponents/Footer";

const API_URL = "https://mahalaxmisite-backend.onrender.com";

function App() {
  useEffect(() => {
    const wakeServer = async () => {
      try {
        const response = await axios.get(`${API_URL}/health`, {
          timeout: 120000,
        });

        console.log("Backend health check:", response.data);
      } catch (error) {
        console.error(
          "Backend health check failed:",
          error.message
        );
      }
    };

    wakeServer();
  }, []);

  return (
    <div className="w-full">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<AbhishekBooking />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
