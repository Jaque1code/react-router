import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Barra from "./components/Barra.jsx";
import DetallePersonaje from "./views/DetallePersonaje.jsx";
import Home from "./views/Home.jsx";
import Personajes from "./views/Personajes.jsx";


function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Barra></Barra>
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/personajes" element={<Personajes></Personajes>}></Route>
            <Route path="/personajes/:id" element={<DetallePersonaje></DetallePersonaje>}></Route>
            <Route path="*" element={<div>Error</div>}></Route>
         </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
