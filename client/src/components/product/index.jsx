import { useContext, useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Add from './Add';
import Table from "./Table";
import { globalContext } from "../../App";


const Products = () => {

    const [products, setProducts] = useState([])
    const [dummy, setDummy] = useState(false)
    const { navigateTo } = useContext(globalContext)


    useEffect(() => {
        fetchProducts()
    }, [dummy]);

    const fetchProducts = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/product')
            // console.log(data);
            setProducts(data.reverse())
        } catch (error) {
            console.log('Error fetching materials', error);
        }
    }

    const addProduct = async (product) => {

        product.materials = product.materials.map(
            ({ material, quantity }) => ({ id: material.id, quantity })
        )
        // console.log(product);

        const formData = new FormData();
        for (const key in product) {
            formData.append(key, product[key]);
        }
        formData.set('materials', JSON.stringify(product.materials));

        try {
            await axios.post('http://127.0.0.1:3000/api/product/materials', formData)
            navigateTo('/products')
            setDummy([!dummy])
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
