import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    // Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
  },
});

export async function fetchUserData(username) {
  const response = await api.get(`/users/${username}`);
  return response.data;
}

/**
 * Advanced search using GitHub Search API
 * Returns: { users: [], hasMore: boolean }
 */
export async function fetchAdvancedUsers({ username, location, minRepos, page = 1, perPage = 10 }) {
  const qParts = [];

  // If user typed something, search by it (login/name keywords)
  if (username && username.trim()) qParts.push(username.trim());

  // location filter: location:Lome
  if (location && location.trim()) qParts.push(`location:${location.trim()}`);

  // repositories filter: repos:>=10
  if (minRepos !== "" && minRepos !== null && minRepos !== undefined) {
    const n = Number(minRepos);
    if (!Number.isNaN(n)) qParts.push(`repos:>=${n}`);
  }

  // If everything empty, still avoid invalid query
  const q = qParts.length ? qParts.join(" ") : "type:user";

  const res = await api.get("/search/users", {
    params: { q, page, per_page: perPage },
  });

  // Search endpoint doesn't give location/repos -> fetch each user details
  const items = res.data.items || [];

  const detailedUsers = await Promise.all(
    items.map(async (u) => {
      try {
        const full = await api.get(`/users/${u.login}`);
        return full.data;
      } catch {
        return u; // fallback if details request fails
      }
    })
  );

  // GitHub gives total_count; but also rate limits may affect.
  const total = res.data.total_count || 0;
  const fetchedSoFar = page * perPage;
  const hasMore = fetchedSoFar < total && items.length === perPage;

  return { users: detailedUsers, hasMore };
}
