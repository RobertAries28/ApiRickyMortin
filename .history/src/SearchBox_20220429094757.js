import axios from 'axios';
import React, { useState } from 'react';

const Searchbox = ({setInformation}) => {
    const [ typeId, setTypeId]= useState("")

    const searchType=()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}/`)
       .then(res=> setInformation(res.data))
    }

    return (
        <div className='searchBox'>
              <input
                type="text"
                onChange={e=> setTypeId(e.target.value)}
                value={typeId}
                placeholder="type a location id"
            />

            <button onClick={searchType}>
                Search
            </button>
        </div>
    );
}

export default Searchbox;
