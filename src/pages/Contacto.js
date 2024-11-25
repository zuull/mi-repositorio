import React from 'react';

const Contacto = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#99DDCC]">Contáctame</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block mb-1">Nombre</label>
            <input type="text" id="nombre" name="nombre" className="w-full px-3 py-2 border border-[#BAD7DF] rounded focus:outline-none focus:ring-2 focus:ring-[#99DDCC]" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Correo Electrónico</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-[#BAD7DF] rounded focus:outline-none focus:ring-2 focus:ring-[#99DDCC]" required />
          </div>
          <div>
            <label htmlFor="mensaje" className="block mb-1">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows={4} className="w-full px-3 py-2 border border-[#BAD7DF] rounded focus:outline-none focus:ring-2 focus:ring-[#99DDCC]" required></textarea>
          </div>
          <button type="submit" className="w-full bg-[#FFE2E2] text-gray-800 px-4 py-2 rounded hover:bg-[#EEF1FF] transition duration-300">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;