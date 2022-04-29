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
            <div className='personaje_information'>
            <h1>{personaje.name}</h1>
            <h2><span>.</span>{personaje.status}</h2>
            <h2><span>origin</span><br/>{personaje.origin?.name}</h2> 
            <h2><span>episode</span><br/> {personaje.episode?.length}</h2>
            </div>
        </div>
    );
}

export default Residentinfo;
