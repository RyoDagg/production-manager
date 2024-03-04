import { useContext, useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Add from './Add';
import Table from "./Table";
import { globalContext } from "../../App";


const Products = () => {

    const [products, setProducts] = useState([])
    const { navigateTo } = useContext(globalContext)


    useEffect(() => {
        fetchMaterials()
    }, []);

    const fetchMaterials = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/product')
            console.log(data);
            setProducts(data.reverse())
        } catch (error) {
            console.log('Error fetching materials', error);
        }
    }

    const addProduct = async (product) => {
        try {
            const { data } = await axios.post('http://127.0.0.1:3000/api/product', product)
            navigateTo('/products')
            setProducts([data, ...products])
        } catch (error) {
            console.log('Error adding materials', error);
        }
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<Table {...{ products }} />} />
                <Route path='/add' element={<Add submit={addProduct} />} />
            </Routes>
        </>
    )
}

export default Products
