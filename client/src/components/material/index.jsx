import { useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Add from './Add';
import Table from "./Table";


const Materials = () => {

    const [materials, setMaterials] = useState([])


    useEffect(() => {
        fetchMaterials()
    }, []);

    const fetchMaterials = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/material')
            console.log(data);
            setMaterials(data)
        } catch (error) {
            console.log('Error fetching materials', error);
        }
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<Table {...{ materials }} />} />
                <Route path='/add' element={<Add />} />
            </Routes>
        </>
    )
}

export default Materials
