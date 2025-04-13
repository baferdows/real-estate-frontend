import { Routes, Route } from "react-router-dom";
import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";
import HomePage from "./src/pages/HomePage";
import LogoutButton from "./src/components/LogoutButton";
import WelcomeMessage from "./src/components/WelcomeMessage";
import PropertyInputPage from "./src/pages/PropertyInputPage";

export default function App() {
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