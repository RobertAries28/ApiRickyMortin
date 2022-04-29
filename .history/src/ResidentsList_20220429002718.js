import React from 'react';
import Residentinfo from './ResidentInfo';
import './index.css';

const Residentslist = ({urls}) => {
    return (
        <div className='personajeList'>
            {
                urls?.map(url=>(
                    <Residentinfo information={url} key={url}/>
                )) 
            }
        </div>
    );
}

export default Residentslist;
