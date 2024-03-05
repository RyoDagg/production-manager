import { useContext, useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Add from './Add';
import Table from "./Table";
import { globalContext } from "../../App";


const Materials = () => {

    const [materials, setMaterials] = useState([])
    const { navigateTo } = useContext(globalContext)


    useEffect(() => {
        fetchMaterials()
    }, []);

    const fetchMaterials = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/material')
            // console.log(data);
            setMaterials(data.reverse())
        } catch (error) {
            console.log('Error fetching materials', error);
        }
    }

    const addMaterial = async (material) => {
        try {
            const { data } = await axios.post('http://127.0.0.1:3000/api/material', material)
            navigateTo('/materials')
            setMaterials([data, ...materials])
        } catch (error) {
            console.log('Error adding materials', error);
        }
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<Table {...{ materials }} />} />
                <Route path='/add' element={<Add submit={addMaterial} />} />
            </Routes>
        </>
    )
}

export default Materials
