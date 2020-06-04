import React, {Fragment} from 'react';


export default(props) =>(
    <Fragment>
        <h2 className="text-3xl font-bold mt-12 text-center">{props.title}</h2>
            <div className="flex mt-8 overflow-x-scroll max-w-4xl max-w-screen-sm mx-auto">
                {props.data.map((el, index) => (
                    <props.card element={el} key={index}/>
                ))}
            </div>
    </Fragment>
)