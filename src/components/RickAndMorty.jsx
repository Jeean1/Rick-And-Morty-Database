



import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ResidentItem from './ResidentItem';

const RickAndMorty = () => {

    const [location, setLocation] = useState({})

    const [id, setId] = useState("")

    const [counterID, setCounterID] = useState(0)

    useEffect(() => {

        let random = Math.floor(Math.random() * 126) + 1

        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))

    }, [])


    console.log(location)


    const getLocation = () => {


        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setLocation(res.data))

    }

    const noResident = () => {

        if (location.residents?.length === 0) {
            return (
                <>
                    <div className='noResidents'>

                        <h3>No residents in this dimension...</h3>

                    </div>
                </>
            )
        }

    }

    const nextWorld = () => {

        axios.get(`https://rickandmortyapi.com/api/location/${counterID}`)
            .then(res => setLocation(res.data))

        let increment = () => {
            if (counterID >= 126) {
                setCounterID(0)
            }
            else {

                setCounterID(counterID + 1)
                console.log(counterID)

            }
        }




        return increment()

    }


    return (
        <>

            <header>
                <div className='header_container'>

                    <div className='header_log'>

                        <div className='div_log'>

                            <img src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" className='log_img' />


                        </div>



                        <div className='header_input'>

                            <input type="text" placeholder='Type a number location ID (1-126)' value={id} onChange={e => setId(e.target.value)} />

                        </div>

                        <div className='header_button'>

                            <button onClick={getLocation}>Search</button>

                        </div>

                    </div>



                </div>

            </header>


            <section>
                <div className='info_container'>
                    <div className='info'>
                        <div>
                            <h3>Name:</h3>
                            <p>{location.name}</p>
                        </div>
                        <div>
                            <h3>Type:</h3>
                            <p>{location.type}</p>
                        </div>
                        <div>
                            <h3>Dimension:</h3>
                            <p>{location.dimension}</p>
                        </div>
                        <div>
                            <h3>Population:</h3>
                            <p>{location.residents?.length}</p>
                        </div>


                    </div>
                </div>
            </section>

            <section>

                <div className='card_container'>

                    <div className='div_nextWorld'>

                        <button onClick={nextWorld} className='nextWorld'>Next dimension</button>
                    </div>

                    <div className='cards_section'>

                        {noResident()}

                        {
                            location.residents?.map(resident => (
                                <ResidentItem
                                    resident={resident}
                                    key={resident}

                                />
                            ))
                        }



                    </div>

                </div>

            </section>

        </>
    );
};

export default RickAndMorty;