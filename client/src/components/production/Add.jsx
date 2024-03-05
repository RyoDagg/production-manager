import { useEffect, useState } from "react"
import axios from 'axios'

const Add = ({ submit }) => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()
    const [stock, setStock] = useState()
    const [materialIndex, setMaterialIndex] = useState(-1)
    const [quantity, setQuantity] = useState(0)
    const [materials, setMaterials] = useState([])
    const [productMats, setProdMats] = useState([])

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

    // productMaterials to state
    const addMaterial = (index, quantity) => {
        setProdMats([
            {
                material: materials[index],
                quantity
            },
            ...productMats])

        setMaterialIndex(-1)
        setQuantity(0)
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
                    <div className="col-sm-4">
                        <select
                            value={materialIndex}
                            placeholder="Material"
                            onChange={(event) => setMaterialIndex(event.target.value)}
                            className="form-control" >
                            <option value={-1}>...</option>
                            {materials.map(({ name, unit }, i) =>
                                <option key={i} value={i}>{`${name} (${unit})`}</option>

                            )}
                        </select>
                    </div>
                    <div className="col-sm-2">
                        <input
                            value={quantity}
                            placeholder="Quantity"
                            type="number"
                            onChange={(event) => setQuantity(event.target.value)}
                            className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <button
                            onClick={() => addMaterial(materialIndex, quantity)}
                            className="btn btn-success">Add</button>
                    </div>
                    <div className="col8">
                        {productMats.map(({ material, quantity }, i) => (
                            <div
                                key={i}
                                className="badge bg-primary m-1">
                                <h6>
                                    {`${material.name}: ${quantity}${material.unit}`}
                                </h6>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-3 text-right">
                    <button
                        onClick={() => submit({ name, description, image, stock, materials: productMats })}
                        className="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Add
