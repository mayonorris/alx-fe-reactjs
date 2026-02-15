import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (r) => String(r.id) === String(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-4">Recipe not found</h1>
          <Link to="/" className="text-blue-700 font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow hover:shadow-xl transition duration-300 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <Link to="/" className="text-blue-700 font-medium hover:underline">
            ← Back to Home
          </Link>

          <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
          <p className="text-gray-700 mt-2">{recipe.summary}</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
