import "./UserProfile.css";

function UserProfile({ user }) {
  //logic
  let ageText = "Chưa cập nhật tuổi";
  const style = {
    UserCard: {
      background: "#f5f5f5f5",
      padding: "15px",
      borderRadius: "15px",
    },
    ageText: { color: "red" },
  };
  if (user.birthYear) {
    const currentYear = new Date().getFullYear();
    ageText = `Sinh năm: ${user.birthYear} (${currentYear - user.birthYear} tuổi)`;
  }
  //UI-JSX
  return (
    <div className="user-card" style={style.UserCard}>
      <h2>{user.name ?? "Ẩn danh"}</h2>
      {user.avatarUrl && <img className="avatar" src={user.avatarUrl} alt="" />}
      {user.location ? (
        <p>Sống tại:{user.location}</p>
      ) : (
        <p>Chưa cập nhật địa chỉ</p>
      )}

      <p style={style.ageText}>{ageText}</p>

      {user.skills?.length > 0 && (
        <>
          <h4>Kỹ năng:</h4>
          <ul>
            {user.skills.map((skill, index) => (
              <li key={index}> {skill}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
export default UserProfile;
