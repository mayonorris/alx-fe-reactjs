// src/UserDetails.jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserDetails() {
  // Consume context instead of props
  const userData = useContext(UserContext);

  if (!userData) {
    return <p>No user data available.</p>;
  }

  const { name, email } = userData;

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <p style={{ margin: 0 }}>
        <strong>Name:</strong> {name}
      </p>
      <p style={{ margin: 0 }}>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
}

export default UserDetails;
