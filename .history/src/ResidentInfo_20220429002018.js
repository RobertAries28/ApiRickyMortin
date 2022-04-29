import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Residentinfo = ({information}) => {

    const[personaje,setPersonaje]= useState({})

    useEffect(()=>{
        axios.get(information)
        .then(res=>setPersonaje(res.data))
    },[information])
    return (
        <div>
            <h1>{personaje.name}</h1>
            <img src={personaje.image} alt="" />
            <h2>{personaje.status}</h2>
            <h2>{personaje.origin?.name}</h2> 
            <h2>{personaje.episode?.length}</h2>
        </div>
    );
}

export default Residentinfo;
