// Expects props: name, age, bio
const UserProfile = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "12px",
        margin: "12px 0",
        borderRadius: "8px",
        backgroundColor: "#fafafa",
      }}
    >
      <h2 style={{ color: "blue", margin: "0 0 8px" }}>{props.name}</h2>
      <p style={{ margin: "6px 0" }}>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p style={{ margin: 0 }}>
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;
