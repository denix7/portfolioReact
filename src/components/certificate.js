import React from 'react';

export default(props) => {
    const course = props.element;

    return(
        <div className="">
            <div className="shadow bg-purple-100 mr-4 mt-10 text-center mb-12 flex-shrink-0" style={{width:"300px"}}>
                <div className="m-2 font-bold h-20 overflow-y-hidden">{course.title}</div>
                <a href={course.url} className="inline-block p-1 bg-purple-200 text-purple-700" target="_blank" rel="noopener noreferrer">{course.url}</a>
            </div>
            <br></br>
        </div>
    ) 
}