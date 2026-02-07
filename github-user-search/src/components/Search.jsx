import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

export default function Search() {
  // Basic username search (Task 1)
  const [username, setUsername] = useState("");

  // Advanced fields (Task 2)
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const [user, setUser] = useState(null); // basic search single user
  const [users, setUsers] = useState([]); // advanced search list
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const clearResults = () => {
    setUser(null);
    setUsers([]);
    setPage(1);
    setHasMore(false);
  };

  // --- BASIC SEARCH (optional to keep) ---
  const handleBasicSearch = async (e) => {
    e.preventDefault();
    const trimmed = username.trim();
    if (!trimmed) return;

    clearResults();
    setError(false);
    setLoading(true);

    try {
      const data = await fetchUserData(trimmed);
      setUser(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // --- ADVANCED SEARCH ---
  const handleAdvancedSearch = async (e) => {
    e.preventDefault();

    // allow searching even if username empty (location/repos only)
    clearResults();
    setError(false);
    setLoading(true);

    try {
      const result = await fetchAdvancedUsers({
        username,
        location,
        minRepos,
        page: 1,
        perPage: 10,
      });

      setUsers(result.users);
      setHasMore(result.hasMore);
      setPage(1);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    setError(false);

    try {
      const result = await fetchAdvancedUsers({
        username,
        location,
        minRepos,
        page: nextPage,
        perPage: 10,
      });

      setUsers((prev) => [...prev, ...result.users]);
      setHasMore(result.hasMore);
      setPage(nextPage);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white shadow rounded-xl p-4 border">
        <h2 className="text-xl font-semibold mb-3">GitHub User Search</h2>

        {/* BASIC SEARCH (Task 1) */}
        <form onSubmit={handleBasicSearch} className="flex gap-2 mb-4">
          <input
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring"
            type="text"
            placeholder="Search by exact username (e.g. octocat)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90"
            type="submit"
          >
            Search
          </button>
        </form>

        {/* ADVANCED SEARCH (Task 2) */}
        <form onSubmit={handleAdvancedSearch} className="grid gap-3 md:grid-cols-3">
          <input
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring"
            type="text"
            placeholder="Keyword (login/name)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring"
            type="text"
            placeholder="Location (e.g. Lomé)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring"
            type="number"
            min="0"
            placeholder="Min repos (e.g. 10)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />

          <div className="md:col-span-3 flex gap-2">
            <button
              className="flex-1 px-4 py-2 rounded-lg bg-blue-600 text-white hover:opacity-90"
              type="submit"
            >
              Advanced Search
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg border hover:bg-gray-50"
              onClick={() => {
                setUsername("");
                setLocation("");
                setMinRepos("");
                clearResults();
                setError(false);
              }}
            >
              Clear
            </button>
          </div>
        </form>

        {/* Status */}
        <div className="mt-4">
          {loading && <p className="text-gray-600">Loading...</p>}
          {error && !loading && (
            <p className="text-red-600">Looks like we can't find the user</p>
          )}
        </div>
      </div>

      {/* BASIC SEARCH RESULT (single user) */}
      {user && !loading && !error && (
        <div className="mt-4 bg-white shadow rounded-xl p-4 border flex gap-4 items-center">
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <h3 className="text-lg font-semibold">{user.name ? user.name : user.login}</h3>
            <p className="text-gray-600">@{user.login}</p>
            <a
              className="text-blue-600 underline"
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}

      {/* ADVANCED SEARCH RESULTS (list) */}
      {users.length > 0 && !loading && !error && (
        <div className="mt-4 space-y-3">
          {users.map((u) => (
            <div
              key={u.id || u.login}
              className="bg-white shadow rounded-xl p-4 border flex gap-4 items-center"
            >
              <img
                src={u.avatar_url}
                alt={`${u.login} avatar`}
                className="w-16 h-16 rounded-full border"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{u.name ? u.name : u.login}</h3>
                <p className="text-gray-600">@{u.login}</p>
                <p className="text-sm text-gray-700">
                  Location: {u.location ? u.location : "N/A"} • Public repos:{" "}
                  {typeof u.public_repos === "number" ? u.public_repos : "N/A"}
                </p>
              </div>
              <a
                className="text-blue-600 underline"
                href={u.html_url}
                target="_blank"
                rel="noreferrer"
              >
                Profile
              </a>
            </div>
          ))}

          {hasMore && (
            <button
              onClick={handleLoadMore}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white hover:opacity-90"
              type="button"
              disabled={loading}
            >
              {loading ? "Loading..." : "Load more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
