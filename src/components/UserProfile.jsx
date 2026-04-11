import "./UserProfile.css";

function UserProfile() {
  // Logic
  // const name = "Nguyen Van A";
  // const avatarUrl = "https://i.pravatar.cc/150?img=12";
  // const location = "Ha Noi";
  // const birthYear = "2000";
  // const skills = ["Html,css", "React,NextJs", "PHP,Laravel,NestJs", "mySQL"];
  const user = {
    name: "Nguyen Van A",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
    location: "Ha Noi",
    birthYear: "2000",
    skills: ["Html,css", "React,NextJs", "PHP,Laravel,NestJs", "mySQL"],
  };
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
      <p> Song tai:{user.location}</p>
      <p>Sinh nam:{user.birthYear}</p>
      <h4>Ky nang:</h4>
      <ul>
        <li>{user.skills[0]}</li>
        <li>{user.skills[1]}</li>
        <li>{user.skills[2]}</li>
        <li>{user.skills[3]}</li>
      </ul>
    </div>
  );
}
export default UserProfile;
