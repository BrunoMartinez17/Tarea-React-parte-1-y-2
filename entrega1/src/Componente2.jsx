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

            console.error('fallo axios', err);
            setError('no se detectan los campeones de valorant');
          }
        };
        getPersonajes();
      }, []);
    

    return (
       
        <>
            {error}
            
                {personajes.map((personaje) => (<>
                    <option>{personaje.displayName}
                    </option>
                    <p>{personaje.description}</p>
                   </>
                ))}
            </>
       
    );

};
export default ChampValorant;
