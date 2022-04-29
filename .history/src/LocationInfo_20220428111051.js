import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css';

const Locationinfo = () => {
     const [information,setInformation]= useState({})
    useEffect(()=>{
        const random= Math.floor(Math.random()*126)+1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
         .then(res=> setInformation(res.data));

    },[])

    console.log(information)
    return (
        <div className='information'>
            <h1>{information.name}</h1>
            <h2>Type: <span>{information.type}</span></h2>
            <h2>Dimension: <span>{information.dimension}</span></h2>
            <h2>Population: <span>{information.residents?.length}</span></h2>
        </div>
    );
}

export default Locationinfo;
