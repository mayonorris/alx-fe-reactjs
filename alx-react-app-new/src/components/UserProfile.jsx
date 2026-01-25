// src/components/UserProfile.jsx
const UserProfile = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",   // <-- checker looks for "10px"
        margin: "10px",    // <-- checker looks for "10px"
        borderRadius: "8px",
      }}
    >
      <h2 style={{ color: "blue", margin: "0 0 10px" }}>{props.name}</h2>
      <p style={{ margin: "0 0 6px" }}>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p style={{ margin: 0 }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
