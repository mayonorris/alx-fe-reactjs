// src/services/githubService.js
import axios from "axios";

/**
 * Fetch a GitHub user by username.
 * Endpoint: https://api.github.com/users/{username}
 */
export async function fetchUserData(username) {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get(url, {
    headers: {
      Accept: "application/vnd.github+json",
      // Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });
  return response.data;
}
