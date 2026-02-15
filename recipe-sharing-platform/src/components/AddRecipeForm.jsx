import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if (!instructions.trim()) newErrors.instructions = "Instructions are required.";

    const ingredientList = ingredients
      .split(/,|\n/)
      .map((i) => i.trim())
      .filter(Boolean);

    if (ingredientList.length < 2) {
      newErrors.ingredients = "Please provide at least 2 ingredients (comma or new line separated).";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    alert("Recipe submitted successfully!");

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Add a New Recipe</h1>
          <Link to="/" className="text-blue-700 font-medium hover:underline">
            ← Back
          </Link>
        </div>

        <p className="text-gray-600 mt-2">
          Fill out the form below. All fields are required.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Recipe Title</label>
            <input
              type="text"
              className={`mt-2 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. Jollof Rice"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Ingredients (comma or new lines)
            </label>
            <textarea
              className={`mt-2 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={`e.g.\nRice, Tomato, Onion\nor\nRice\nTomato\nOnion`}
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            {errors.ingredients && (
              <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Preparation Steps (new lines recommended)
            </label>
            <textarea
              className={`mt-2 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 min-h-[140px] ${
                errors.instructions ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={`e.g.\n1) Wash rice\n2) Cook sauce\n3) Mix and simmer`}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
            {errors.instructions && (
              <p className="text-red-600 text-sm mt-1">{errors.instructions}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}
