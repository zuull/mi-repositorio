import React from 'react';

const SobreMi = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#99DDCC]">Sobre Mí</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        <img src="/nutria.jpg" alt="Zully"
             className="rounded-full w-64 h-64 object-cover border-4 border-[#FFE2E2]"/>
        <div className="max-w-md">
          <p className="text-lg mb-4">
            ¡Hola! Soy Zully, una desarrolladora web. Me especializo en crear sitios web
            responsivos y amigables para el usuario utilizando tecnologías modernas.
          </p>
          <p className="text-lg mb-4">
            Mis habilidades incluyen:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>HTML5, CSS3, JavaScript</li>
            <li>React, Vue.js</li>
            <li>Node.js, Express</li>
            <li>MongoDB, PostgreSQL</li>
            <li>Diseño Web Responsivo</li>
            <li>Los de arriba son mis objetivos jijiji</li>
          </ul>
          <p className="text-lg">
            Si me abducen, no es un secuestro, es un rescate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;