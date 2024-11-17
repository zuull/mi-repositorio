import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F6F6F6] text-gray-800 font-sans">
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/sobre-mi' element={<SobreMi />}/>
          <Route path='/proyectos' element={<Proyectos />}/>
          <Route path='/contacto' element={<Contacto />}/>
        </Routes>
      </div>
    </BrowserRouter>
);
}

export default App;
