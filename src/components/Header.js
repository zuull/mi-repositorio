import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-[#BAD7DF] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#4A628A]">ZULLY ALEJANDRA</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-[#FFE2E2]">Inicio</Link></li>
          <li><Link to="/sobre-mi" className="hover:text-[#FFE2E2]">Sobre Mí</Link></li>
          <li><Link to="/proyectos" className="hover:text-[#FFE2E2]">Proyectos</Link></li>
          <li><Link to="/contacto" className="hover:text-[#FFE2E2]">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;