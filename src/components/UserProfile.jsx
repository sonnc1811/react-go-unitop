import "./UserProfile.css";

function UserProfile({ user }) {
  console.log(user);
  return (
    <div
      className="user-card"
      style={{
        background: "#f5f5f5f5",
        padding: "15px",
        borderRadius: "15px",
      }}
    >
      <h2>{user.name}</h2>
      <img className="avatar" src={user.avatarUrl} alt="" />
      <p>Song tai:{user.location}</p>
      <p>Sinh:{user.birthYear}</p>
      <h4>Ky nang:</h4>
      <ul>
        {/* <li>{user.skills[0]}</li>
        <li>{user.skills[1]}</li>
        <li>{user.skills[2]}</li>
        <li>{user.skills[3]}</li> */}
        {user.skills.map((skill, index) => (
          <li key={index}> {skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default UserProfile;
