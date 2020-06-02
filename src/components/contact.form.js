import React from "react";

export default() => (
    <form className="mt-16 text-center">
        <label htmlFor="contact-content" className="block text-gray-700 font-bold mb-2">Contactame</label>
        <div className="flex shadow bg-white p-2">
            <textarea id="contact-content" 
                    name="contact-content" 
                    className="flex-1 py-2 px-3 text-gray-500 focus:outline-none focus:shadow-outline" 
                    rows="1">
            </textarea>
            <button className="btn">Enviar</button>
        </div>
    </form>
);