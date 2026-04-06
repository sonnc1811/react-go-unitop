import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Welcome from "./components/Welcome";
import { Header, Footer, Sidebar } from "./components/Layout";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
