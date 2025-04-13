export function getUserEmailFromToken() {
    try {
      const token = localStorage.getItem("token");
      if (!token) return null;
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload?.email || null;
    } catch {
      return null;
    }
  }