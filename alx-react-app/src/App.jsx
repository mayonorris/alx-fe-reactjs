import UserProfile from './UserProfile';

function App() {
  return (
    <>
      {/* Other components can stay above/below */}
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
    </>
  );
}
export default App;
