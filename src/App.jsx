import { useState } from "react";
import HomePages from "./Pages/HomePages";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HomePages />
      <Footer />
    </>
  );
}

export default App;
