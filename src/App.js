import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App h-screen">
      <div className="px-80 py-20 h-full flex flex-col">
        <Header></Header>
        <Navbar></Navbar>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
