// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import AbhishekBooking from "./userComponents/AbhishekBooking";
// import SareeUpload from "./Admin/SareeUpload";
// import AdminDashboard from "./Admin/AdminDashboard";
// import BuySareeForm from "./userComponents/BuySareeForm";
// import SareeGalleryUser from "./userComponents/SareeGalleryUser";
// // import "./userComponents/AbhishekBooking";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <AbhishekBooking />
//       <SareeUpload />
//       <SareeGalleryUser></SareeGalleryUser>
//       <AdminDashboard />
//     </>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AbhishekBooking from "./userComponents/AbhishekBooking";
import SareeUpload from "./Admin/SareeUpload";
import AdminDashboard from "./Admin/AdminDashboard";
import SareeGalleryUser from "./userComponents/SareeGalleryUser";
import Home from "./Home"; // Create a simple Home page (optional)
import Navbar from "./Navbar"; // Optional: Create a navigation bar
import Footer from "./userComponents/CommanComponents/Footer";

function App() {
  return (
    <div className="w-full">
      {" "}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<AbhishekBooking />} />
          {/* <Route path="/saree" element={<SareeGalleryUser />} /> */}

          {/* <Route path="/admin">
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="upload-saree" element={<SareeUpload />} />
        </Route> */}
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
