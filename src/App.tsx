import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  const [navState, setNavState] = useState(false);
  return (
    <>
      <main className="bg-bgGray min-h-screen overflow-hidden">
        <div className="mx-auto ">
          <Navbar />
          <Home/>
        </div>
      </main>
    </>
  );
}

export default App;
