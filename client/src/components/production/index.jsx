import { useContext, useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Add from './Add';
import Table from "./Table";
import { globalContext } from "../../App";


const Productions = () => {

    const [productions, setProductions] = useState([])
    const [dummy, setDummy] = useState(false)
    const { navigateTo } = useContext(globalContext)


    useEffect(() => {
        fetchProductionss()
    }, [dummy]);

    const fetchProductionss = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/production')
            // console.log(data);
            setProductions(data.reverse())
        } catch (error) {
            console.log('Error fetching materials', error);
        }
    }

    const addProduction = async (production) => {
        
        try {
            await axios.post('http://127.0.0.1:3000/api/production', production)
            navigateTo('/productions')
            setDummy([!dummy])
        } catch (error) {
            console.log('Error adding materials', error);
        }
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<Table {...{ productions }} />} />
                <Route path='/add' element={<Add submit={addProduction} />} />
            </Routes>
        </>
    )
}

export default Productions
