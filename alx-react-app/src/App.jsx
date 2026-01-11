import UserProfile from './UserProfile';

function App() {
  return (
    <>
      {/* Other components can stay above/below */}
      <UserProfile
        name="Alice"
        age="25"
        Bio="Loves hiking and photography"
      />
    </>
  );
}
export default App;
