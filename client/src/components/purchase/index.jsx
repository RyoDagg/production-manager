import { useContext, useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
// import Add from './Add';
import Table from "./Table";
import { globalContext } from "../../App";


const Purchases = () => {

    const [purchases, setPurchases] = useState([])
    const [dummy, setDummy] = useState(false)
    const { navigateTo } = useContext(globalContext)


    useEffect(() => {
        fetchPurchases()
    }, [dummy]);

    const fetchPurchases = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/purchase')
            // console.log(data);
            setPurchases(data.reverse())
        } catch (error) {
            console.log('Error fetching purchases', error);
        }
    }

    // const addPurchse = async (purchse) => {

    //     try {
    //         await axios.post('http://127.0.0.1:3000/api/purchase', purchse)
    //         navigateTo('/purchases')
    //         setDummy([!dummy])
    //     } catch (error) {
    //         console.log('Error adding purchase', error);
    //     }
    // }

    return (
        <>
            <Routes>
                <Route path='/' element={<Table {...{ purchases }} />} />
                {/* <Route path='/add' element={<Add submit={addPurchse} />} /> */}
            </Routes>
        </>
    )
}

export default Purchases
