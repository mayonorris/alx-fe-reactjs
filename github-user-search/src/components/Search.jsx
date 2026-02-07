// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmed = username.trim();
    if (!trimmed) return;

    // Clear old user immediately when starting to load
    setUser(null);
    setError(false);
    setLoading(true);

    try {
      const data = await fetchUserData(trimmed);
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && !loading && <p>Looks like we cant find the user</p>}

      {user && !loading && !error && (
        <div style={{ marginTop: "16px" }}>
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            width="120"
            height="120"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name ? user.name : user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}
