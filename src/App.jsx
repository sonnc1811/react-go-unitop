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
  return (
    <>
      {/* <Button>
        👉Dang ky <strong>nhan uu dai ngay</strong>
      </Button>
      <Button>🔑Dang nhap</Button> */}
      {users.map((user) => (
        <UserProfile key={user.id} user={user} />
      ))}
    </>
  );
}

export default App;
