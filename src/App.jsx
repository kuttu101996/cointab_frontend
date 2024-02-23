import "./App.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
