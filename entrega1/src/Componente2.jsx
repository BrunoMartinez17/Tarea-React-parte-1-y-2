import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ChampValorant() {
    const [personajes, setPersonajes] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
       
        const getPersonajes = async () => {
          try {
            const response = await axios.get('https://valorant-api.com/v1/agents');
            
            setPersonajes(response.data.data);
          } catch (err) {
            // eslint-disable-next-line no-console
            console.error('fallo axios', err);
            setError('Hubo un error al traer los campeones de League of Legends');
          }
        };
        getPersonajes();
      }, []);
    

    return (
        <>
        
            {error}
            <select>
                {personajes.map((personaje) => (
                    <option>{personaje.displayName}</option>
                ))}
            </select>
        </>
    );

};
export default ChampValorant;