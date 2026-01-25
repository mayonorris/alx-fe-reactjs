// src/App.jsx
import ProfilePage from "./ProfilePage";
import { UserContext } from "./UserContext";

function App() {
  // The data we used to drill via props
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Provide the data to the whole subtree
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
