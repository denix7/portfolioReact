import React from "react";
import ilustration from '../assets/img/bg.png';
import Form from "./contact.form";

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-700 text-4xl">Hola! soy Dennis</h1>
                    <p className="text-xl font-light">Desarrollador web</p>    
                </div>
                <img src={ilustration} alt="background" className="bg"></img>
            </div>
            
            <div>
                <Form/>
            </div>
        </div>   
    </header>

)