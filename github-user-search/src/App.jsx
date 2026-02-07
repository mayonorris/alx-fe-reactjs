import Search from "./components/Search";

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl">GitHub User Search</h1>
          <p className="mt-2 text-slate-600">
            Search profiles by username or use advanced filters (location, repos).
          </p>
        </header>

        {/* Main */}
        <main>
          <Search />
        </main>

        {/* Footer */}
        <footer className="mt-10 text-sm text-slate-500">
          Built with React + Tailwind + GitHub API.
        </footer>
      </div>
    </div>
  );
}
