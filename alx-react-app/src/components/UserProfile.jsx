const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.Bio}</p>
    </div>
  );
};
export default UserProfile;
