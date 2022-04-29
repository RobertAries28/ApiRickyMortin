import axios from 'axios';
import React, { useState } from 'react';

const Searchbox = ({setInformation}) => {
    const [ typeId, setTypeId]= useState("")

    const searchType=()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}/`)
       .then(res=> setInformation(res.data))
    }

    return (
        <div>
              <input
                type="text"
                onChange={e=> setTypeId(e.target.value)}
                value={typeId}
            />

            <button onClick={searchType}>
                Search
            </button>
        </div>
    );
}

export default Searchbox;
