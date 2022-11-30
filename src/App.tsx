import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";

function App() {
  const [navState, setNavState] = useState(false);
  return (
    <>
      <main className="mx-auto bg-url min-h-screen overflow-hidden">
        {/* <Navbar /> */}
        <Routes />
      </main>
      <Footer />
    </>
  );
}

export default App;
