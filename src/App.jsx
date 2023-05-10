import { Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import PaymentSuccess from "./screens/PaymentSuccess";

import "react-toastify/dist/ReactToastify.css";
import AddEvent from "./screens/AddEvent";
import Events from "./screens/Events";
import Event from "./screens/Event";

function App() {
  return (
    <>
      <div className="w-full h-[100vh]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="add-event" element={<AddEvent />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<Event />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
