import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import { useAuth } from "./hooks/useAuth";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
function App() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
