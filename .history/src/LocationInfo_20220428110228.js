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
            
        </div>
    );
}

export default Locationinfo;
