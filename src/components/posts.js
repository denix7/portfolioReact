import React, {Fragment} from 'react';


export default(props) =>(
    <Fragment>
        <h2 className="text-3xl font-bold mt-12 text-center">{props.title}</h2>
            <div className="flex mt-8">
                {props.data.map(el => (
                    <props.card element={el} key={el.url}/>
                ))}
            </div>
    </Fragment>
)