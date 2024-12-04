import React from 'react';

export const ContactoForm = () => {
  return (
    <div className="flex items-center justify-center md:justify-start md:h-screen  bg-gray-100 p-4 bg-purple1">
      <div className="w-full max-w- p-6 rounded-lg  md:ml-[5%] max-w-[500px] md:max-w-[800px] ">
        <h2 className="text-4xl md:text-6xl  font-thin text-white text-center md:text-left mb-2 ">CONTACTO</h2>
        <p className="text-rosa1 text-center  md:text-left md:text-4xl mb-6">ENVIANOS TU CONSULTA!</p>

        <form className="space-y-4 ">
          <div>
            <label htmlFor="name" className="block text-sm md:text-xl  font-medium text-gray-700">
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nombre*"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 md:text-xl p-3"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm md:text-xl font-medium text-gray-700">
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email*"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 md:text-xl p-3"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm md:text-xl font-medium text-gray-700 ">
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Mensaje*"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 md:text-xl p-3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4  text-white rounded  transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white hover:border-2 md:text-xl p-3"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}


