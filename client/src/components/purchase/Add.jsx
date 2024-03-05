import { useEffect, useState } from "react"
import axios from 'axios'

const Add = ({ submit }) => {
    const [materials, setMaterials] = useState([])
    const [materialId, setMaterialId] = useState(null)
    const [quantity, setQuantity] = useState(0)
    const [unitPrice, setUnitPrice] = useState(0)
    const [supplier, setSupplier] = useState('')

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
            <h3 className="text-primary mt-2 mb-5">Record New Purchase</h3>
            <div className="col-6 mx-auto">
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Material</label>
                    <div className="col-sm-8">
                        <select
                            placeholder="Material"
                            onChange={(event) => {
                                setMaterialId(event.target.value)

                            }}
                            className="form-control" >
                            <option value={null}>...</option>
                            {materials.map(({ name, id }, i) =>
                                <option key={i} value={id}>{`${name}`}</option>

                            )}
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Quantity & Price</label>
                    <div className="col-sm-4">
                        <input
                            min={0}
                            placeholder="Quantity"
                            type="number"
                            onChange={(event) => {
                                setQuantity(event.target.value)
                            }}
                            className="form-control" />
                    </div>
                    <div className="col-sm-4">
                        <input
                            min={0}
                            placeholder="Unit Price"
                            type="number"
                            onChange={(event) => {
                                setUnitPrice(event.target.value)
                            }}
                            className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Supplier</label>

                    <div className="col-sm-8">
                        <input
                            placeholder="Supplier"
                            onChange={(event) => {
                                setSupplier(event.target.value)
                            }}
                            className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-5 col-form-label"><h4>Total Price</h4></label>

                    <div className="col-sm-3">
                        <h3 className="text-primary">{quantity * unitPrice}TND</h3>
                    </div>
                </div>
                <div className="mb-3 text-right">
                    <button
                        onClick={() => submit({ MaterialId: materialId, quantity, unitPrice, supplier })}
                        className="btn btn-success">
                        Submit
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Add
