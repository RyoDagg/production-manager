import { useContext, useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
// import Add from './Add';
import Table from "./Table";
import { globalContext } from "../../App";


const Sale = () => {

    const [sales, setSales] = useState([])
    const [dummy, setDummy] = useState(false)
    const { navigateTo } = useContext(globalContext)


    useEffect(() => {
        fetchPurchases()
    }, [dummy]);

    const fetchPurchases = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/sale')
            console.log(data);
            setSales(data.reverse())
        } catch (error) {
            console.log('Error fetching purchases', error);
        }
    }

    // const addSale = async (sale) => {
    //     try {
    //         await axios.post('http://127.0.0.1:3000/api/sale', sale)
    //         navigateTo('/purchases')
    //         setDummy([!dummy])
    //     } catch (error) {
    //         console.log('Error adding Sale', error);
    //     }
    // }

    return (
        <>
            <Routes>
                <Route path='/' element={<Table {...{ sales }} />} />
                {/* <Route path='/add' element={<Add submit={addSale} />} /> */}
            </Routes>
        </>
    )
}

export default Sale
