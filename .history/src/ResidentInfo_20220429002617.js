import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css';

const Residentinfo = ({information}) => {

    const[personaje,setPersonaje]= useState({})

    useEffect(()=>{
        axios.get(information)
        .then(res=>setPersonaje(res.data))
    },[information])
    return (
        <div className='personaje'>
            
            <img src={personaje.image} alt="" />
            <div>
            <h1>{personaje.name}</h1>
            <h2>{personaje.status}</h2>
            <h2>{personaje.origin?.name}</h2> 
            <h2>{personaje.episode?.length}</h2>
            </div>
        </div>
    );
}

export default Residentinfo;
