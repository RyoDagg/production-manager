import { useEffect, useState } from "react"
import axios from 'axios'

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
        <div>
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Stock</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {materials.map((material, i) =>
                        <tr key={i}>
                            <th scope="row">{i}</th>
                            <td>{material.name}</td>
                            <td>{material.name}</td>
                            <td>{material.description}</td>
                            <td>{material.unit}</td>
                            <td>{material.stock}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Materials
