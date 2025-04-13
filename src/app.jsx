import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LogoutButton from "./components/LogoutButton";
import WelcomeMessage from "./components/WelcomeMessage";
import PropertyInputPage from "./pages/PropertyInputPage";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <WelcomeMessage />
          <LogoutButton />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/input" element={<PropertyInputPage />} />
        </Routes>
      </div>
    </Router>
  );
}
