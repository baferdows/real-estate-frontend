import React from "react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow"
    >
      Logout
    </button>
  );
}