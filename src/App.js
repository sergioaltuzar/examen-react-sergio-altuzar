import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarE from "./components/NavbarE";
import Inicio from "./components/pages/Inicio";
import Upload from "./components/pages/Upload";
import Employees from "./components/pages/Employees";
import Login from "./components/pages/Login";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarE />} >
        <Route path="Inicio" element={<Inicio />} />
        <Route path="Employees" element={<Employees />} />
        <Route path="Upload" element={<Upload />} />
        <Route path="Login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/" />} />

        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
