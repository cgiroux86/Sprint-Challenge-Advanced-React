import React from 'react';
import {useCustomFetchHook} from '../hooks/useCustomFetch'

const FunctionalSoccer = () => {
    const [data] = useCustomFetchHook('https://swapi.co/api/people')
    console.log(data)
    return (
        <div>
         {data.map(elem => {
             return <p key={elem.name}>{elem.name}</p>
         })}
        </div>
    );
};

export default FunctionalSoccer;