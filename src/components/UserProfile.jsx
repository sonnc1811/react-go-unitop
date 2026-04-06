import "./UserProfile.css";

function UserProfile() {
  return (
    <div className="User-card">
      <h2>Nguyen Van A</h2>
      <img className="avatar" src="https://i.pravatar.cc/150?img=12" alt="" />
      <p>Ha Noi</p>
      <p>2.000</p>
      <h4>Ky nang</h4>
      <ul>
        <li>Html,css</li>
        <li>React,NextJs</li>
        <li>PHP,Laravel,NestJs</li>
        <li>mySQL</li>
      </ul>
    </div>
  );
}
export default UserProfile;
