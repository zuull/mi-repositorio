import React from 'react';

const Proyectos = () => {
  const proyectos = [
    { id: 1, titulo: "Adopta un Alienígena Pésimo en Matemáticas", descripcion: " Una app que conecta humanos con alienígenas incapaces de entender los números terrícolas", imagen: "/mapache_astronauta.png" },
    { id: 2, titulo: "Abducción Express: El Uber de los Extraterrestres", descripcion: "Una app para que los alienígenas vengan a secuestrarte, pero con estilo", imagen: "/nave_alienigena.jpg" },
    { id: 3, titulo: "ALIENbnb: Renta tu Trastero a una Nave Espacial", descripcion: "Convierte ese espacio vacío en tu garaje en un cómodo estacionamiento para alienígenas viajeros", imagen: "/alien.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#99DDCC]">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{proyecto.titulo}</h3>
              <p className="text-gray-600">{proyecto.descripcion}</p>
              <button className="mt-4 bg-[#BAD7DF] text-gray-800 px-4 py-2 rounded hover:bg-[#99DDCC] transition duration-300">
                Ver Proyecto
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;