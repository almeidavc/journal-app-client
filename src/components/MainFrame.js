import Header from "./Header";
import Navbar from "./Navbar";
import Draft from "./Draft";

const MainFrame = () => {
  return (
    <div className="MainFrame px-80 py-20 h-full flex flex-col">
      <Header></Header>
      <Navbar></Navbar>
      <Draft></Draft>
    </div>
  );
};

export default MainFrame;
