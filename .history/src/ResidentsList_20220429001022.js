import React from 'react';
import Residentinfo from './ResidentInfo';

const Residentslist = ({urls}) => {
    return (
        <div>
            {
                urls?.map(url=>(
                    <Residentinfo information={url} key={url}/>
                )) 
            }
        </div>
    );
}

export default Residentslist;
