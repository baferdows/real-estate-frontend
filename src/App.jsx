import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import PropertyInputPage from "./pages/PropertyInputPage.jsx";
import LogoutButton from "./components/LogoutButton.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";

function App() {
  return (
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
  );
}

export default App; // ✅ Make sure this line exists