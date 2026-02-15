import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load mock data when component mounts
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Recipe Sharing Platform
          </h1>

          <Link
            to="/add"
            className="inline-block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
          >
            + Add Recipe
          </Link>
        </div>

        {/* Recipe Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 block"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-2">
                {recipe.summary}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
