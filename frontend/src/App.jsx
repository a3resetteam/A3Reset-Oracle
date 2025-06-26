import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Welcome to Your Platform 🚀</h1>
      <p>{message}</p>
      <p>
        <strong>
          Edit <code>frontend/src/App.jsx</code> and <code>backend/server.js</code> to begin!
        </strong>
      </p>
    </div>
  );
}

export default App;
