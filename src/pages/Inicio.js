import {Link} from "react-router-dom";

const Inicio = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold mb-4 text-[#99DDCC]">Zully</h1>
      <h2 className="text-3xl mb-8 text-[#BAD7DF]">Desarrolladora Web</h2>
      <p className="text-xl mb-12 max-w-2xl mx-auto">
        ¡Bienvenidos a mi portafolio! Soy una desarrolladora web apasionada por crear sitios web hermosos y funcionales.
      </p>
      <Link to="/proyectos"
            className="bg-[#FFE2E2] text-gray-800 px-6 py-3 rounded-full hover:bg-[#EEF1FF] transition duration-300">
        Ver Mis Proyectos
      </Link>
    </div>
  );
};

export default Inicio;
