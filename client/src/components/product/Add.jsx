import { useEffect, useState } from "react"
import axios from 'axios'

const Add = ({ submit }) => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()
    const [stock, setStock] = useState()
    // const [material, setMaterial] = useState()
    // const [quantity, setQuantity] = useState()
    const [materials, setMaterials] = useState([])
    // const [productMats, setProdMats] = useState([])
    

    useEffect(() => { fetchSelectMats() }, [])

    // fetch materials for select input 
    const fetchSelectMats = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/material/select')
            setMaterials(data)
        } catch (error) {
            console.log('Error fetching materials!!', error);
        }
    }

    return (
        <div className="row pt-3 border text-center">
            <div className="col-6 mx-auto">
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Name</label>
                    <div className="col-sm-8">
                        <input
                            placeholder="Name"
                            onChange={(event) => setName(event.target.value)}
                            className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Description</label>
                    <div className="col-sm-8">
                        <input
                            placeholder="Description"
                            onChange={(event) => setDescription(event.target.value)}
                            className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Image</label>
                    <div className="col-sm-8">
                        <input
                            onChange={(event) => setImage(event.target.value)}
                            className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Stock</label>
                    <div className="col-sm-8">
                        <input
                            placeholder="Stock"
                            type="number"
                            onChange={(event) => setStock(event.target.value)}
                            className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Material</label>
                    <div className="col-sm-3">
                        <select
                            placeholder="Material"
                            onChange={(event) => setStock(event.target.value)}
                            className="form-control" >
                            <option value={null}>...</option>
                            {materials.map(({ id, name }, i) =>
                                <option key={i} value={id}>{name}</option>

                            )}
                        </select>
                    </div>
                    <div className="col-sm-3">
                        <input
                            placeholder="Quantity"
                            onChange={(event) => setStock(event.target.value)}
                            className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <button
                            onClick={() => submit({ name, description, image, stock })}
                            className="btn btn-success">Add</button>
                    </div>
                </div>
                <div className="mb-3 text-right">
                    <button
                        onClick={() => submit({ name, description, image, stock })}
                        className="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Add
