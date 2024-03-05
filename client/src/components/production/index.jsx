import { useContext, useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
// import Add from './Add';
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
            console.log(data);
            setProductions(data.reverse())
        } catch (error) {
            console.log('Error fetching materials', error);
        }
    }

    // const addProduction = async (product) => {
    //     product.materials = product.materials.map(
    //         ({ material, quantity }) => ({ id: material.id, quantity })
    //     )
    //     console.log(product);
    //     // return;
    //     try {
    //         await axios.post('http://127.0.0.1:3000/api/product/materials', product)
    //         navigateTo('/products')
    //         setDummy([!dummy])
    //     } catch (error) {
    //         console.log('Error adding materials', error);
    //     }
    // }

    return (
        <>
            <Routes>
                <Route path='/' element={<Table {...{ productions }} />} />
                {/* <Route path='/add' element={<Add submit={addProduct} />} /> */}
            </Routes>
        </>
    )
}

export default Productions
