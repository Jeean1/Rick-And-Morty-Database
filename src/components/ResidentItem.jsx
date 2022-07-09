



import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


const ResidentItem = ({ resident }) => {

    const [residentData, setResidentData] = useState({})


    useEffect(() => {

        axios.get(resident)
            .then(res => setResidentData(res.data))

    }, [])

    console.log(residentData)

    const statusColor = () => {

        let color = ""

        if (residentData.status === "Alive") {
            color = "green"
        }

        else if (residentData.status === "Dead") {
            color = "red"
        }

        else {
            color = "gray"
        }


        return color

    }



    return (
        <>
            <div className='card'>

                <div className='card_div_img'>

                    <img src={residentData.image} className='card_img' />

                </div>

                <div className='card_info'>

                    <h3>{residentData.name}</h3>
                    <span><div className='circle_status' style={{ backgroundColor: statusColor() }}></div>{residentData.status} - {residentData.species}</span>
                    <p>origin</p>
                    <span>{residentData.origin?.name}</span>
                    <p>episode where appear</p>
                    <span>{residentData.episode?.length}</span>

                </div>

            </div>

        </>
    );
};

export default ResidentItem;