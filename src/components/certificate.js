import React from 'react';

export default(props) => {
    const course = props.element;

    return(
        <div className="">
            <div className="shadow bg-purple mr-4 mt-10 text-center mb-12">
                <div className="m-2 font-bold">{course.title}</div>
                <a href={course.url} className="p-1 bg-purple-200 text-purple-700" target="_blank" rel="noopener noreferrer">{course.url}</a>
            </div>
        </div>
    ) 
}