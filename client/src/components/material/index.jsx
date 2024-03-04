import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Materials = () => {

    const [materials, setMaterials] = useState([])

    const navigateTo = useNavigate()

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

            <button
                onClick={() => navigateTo('/materials/add')}
                className="btn btn-lg btn-success m-4"
            >
                Add New Material
            </button>

            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col" style={{ "width": '50%' }}>Description</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Actions</th>
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
                            <td>❌ ✅ 🛒</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Materials
