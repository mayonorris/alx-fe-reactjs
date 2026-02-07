import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    setUsers([]);

    try {
      const data = await fetchUserData(username.trim());
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async () => {
    setLoading(true);
    setError("");
    setUser(null);
    setUsers([]);

    try {
      const results = await fetchAdvancedUsers({
        username: keyword,
        location,
        minRepos,
      });
      setUsers(results);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setUsername("");
    setKeyword("");
    setLocation("");
    setMinRepos("");
    setUser(null);
    setUsers([]);
    setError("");
  };

  return (
    <section className="card p-5 sm:p-6">
      {/* Basic Search */}
      <form onSubmit={handleBasicSearch} className="space-y-3">
        <div className="grid gap-2">
          <label className="label">Search by exact username</label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              className="input"
              type="text"
              placeholder="e.g. octocat"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="btn-primary sm:w-36" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>

      {/* Divider */}
      <div className="my-5 border-t border-slate-200" />

      {/* Advanced Search */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Advanced Search</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <label className="label">Keyword (login/name)</label>
            <input
              className="input"
              type="text"
              placeholder="e.g. mayo"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <label className="label">Location</label>
            <input
              className="input"
              type="text"
              placeholder="e.g. Lomé"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <label className="label">Min repos</label>
            <input
              className="input"
              type="number"
              min="0"
              placeholder="e.g. 10"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button className="btn-secondary" type="button" onClick={handleClear}>
            Clear
          </button>
          <button className="btn-primary" type="button" onClick={handleAdvancedSearch}>
            Advanced Search
          </button>
        </div>
      </div>

      {/* Status */}
      <div className="mt-6">
        {loading && (
          <p className="rounded-lg bg-slate-100 px-3 py-2 text-slate-700">
            Loading...
          </p>
        )}

        {!loading && error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-red-700">
            {error}
          </p>
        )}
      </div>

      {/* Results */}
      {!loading && !error && user && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="h-16 w-16 rounded-full border border-slate-200"
            />
            <div className="min-w-0">
              <p className="text-lg font-semibold truncate">
                {user.name || user.login}
              </p>
              <a
                className="text-sm text-slate-600 underline underline-offset-4 hover:text-slate-900"
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}

      {!loading && !error && users.length > 0 && (
        <div className="mt-6">
          <p className="mb-3 text-sm text-slate-600">
            Results: <span className="font-semibold">{users.length}</span>
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {users.map((u) => (
              <li key={u.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={u.avatar_url}
                    alt={u.login}
                    className="h-12 w-12 rounded-full border border-slate-200"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{u.login}</p>
                    <a
                      className="text-sm text-slate-600 underline underline-offset-4 hover:text-slate-900"
                      href={u.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open profile
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
