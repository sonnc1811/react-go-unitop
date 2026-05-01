import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
// import "./App.css";
import Welcome from "./components/Welcome";
import { Header, Footer, Sidebar } from "./components/Layout";

import UserProfile from "./components/UserProfile";
import { users } from "./data/users";
import Button from "./components/Button";

function App() {
  //logic
  // const FilteredUser = users.filter((user) => user.location == "Ha Noi");
  // const FilteredUser = users.filter((user) => user.birthYear >= 2000);
  // const FilteredUser = users.filter((user) =>
  //   user.skills.some((s) => s.includes("React")),
  // );
  const FilteredUser = users.filter((user) => {
    return (
      user.skills.some((s) => s.includes("React")) && user.location == "Nghe An"
    );
  });
  //JSX =>UI
  return (
    <>
      {/* <Button>
        👉Dang ky <strong>nhan uu dai ngay</strong>
      </Button>
      <Button>🔑Dang nhap</Button> */}
      {FilteredUser?.length > 0 ? (
        FilteredUser.map((user) => <UserProfile key={user.id} user={user} />)
      ) : (
        <p>Khong tim thay du lieu</p>
      )}
    </>
  );
}

export default App;
