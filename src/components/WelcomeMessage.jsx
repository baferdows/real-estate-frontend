import React from "react";
import { getUserEmailFromToken } from "../utils/auth";

export default function WelcomeMessage() {
  const email = getUserEmailFromToken();
  return email ? (
    <p className="text-sm text-gray-700">Welcome, <strong>{email}</strong>!</p>
  ) : null;
}