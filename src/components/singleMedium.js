import React from 'react';

export default(props) => {
    const medium = props.element;

        return(
            <div className="shadow bg-purple mr-4 mt-10 text-center mb-12 rounded flex-shrink-0" style={{width:"300px"}}>
                <header className="h-40 bg-cover bg-center" 
                        style={{backgroundImage: `url(${medium.thumbnail})`}}>
                </header>  

                <div className="m-2 font-bold h-20 overflow-y-hidden">{medium.title}</div>
                <a href={medium.guid} className="p-1 bg-purple-200 text-purple-700" target="_blank" rel="noopener noreferrer">Leer</a>
            </div>
        ) 
}