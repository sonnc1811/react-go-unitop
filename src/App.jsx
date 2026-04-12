import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
// import "./App.css";
import Welcome from "./components/Welcome";
import { Header, Footer, Sidebar } from "./components/Layout";
import UserProfile from "./components/Userprofile";
import Child from "./components/Child";
function App() {
  // const name = "Cuong";
  // const birthYear = "1988";
  const user = {
    name: "Cuong",
    birthYear: 1988,
  };
  return (
    <>
      {/* <Child name={name} birthYear={birthYear} /> */}
      <Child name={user.name} birthYear={user.birthYear} />
      {/* <UserProfile /> */}
    </>
  );
}

export default App;
