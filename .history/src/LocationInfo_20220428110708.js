import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Locationinfo = () => {
     const [information,setInformation]= useState({})
    useEffect(()=>{
        const random= Math.floor(Math.random()*126)+1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
         .then(res=> setInformation(res.data));

    },[])

    console.log(information)
    return (
        <div>
            <h1>{information.name}</h1>
            <h2>{information.type}</h2>
            <h2>{information.dimension}</h2>
            <h2>{information.residents?.length}</h2>
        </div>
    );
}

export default Locationinfo;
