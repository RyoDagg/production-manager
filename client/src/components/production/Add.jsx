import { useEffect, useState } from "react"
import axios from 'axios'

const Add = ({ submit }) => {
    const [products, setProducts] = useState([])
    const [materials, setMaterials] = useState([])
    const [productId, setProductId] = useState(null)
    const [quantity, setQuantity] = useState(0)

    useEffect(() => { fetchSelectProds() }, [])

    // fetch materials for select input 
    const fetchSelectProds = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/product/select')
            setProducts(data)
        } catch (error) {
            console.log('Error fetching materials!!', error);
        }
    }

    const validateProduction = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/product/' + productId)
            setMaterials(data.Materials)

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="row pt-3 border text-center">
            <h3 className="text-primary mt-2 mb-5">Add new Production</h3>
            <div className="col-6 mx-auto">
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Product</label>
                    <div className="col-sm-8">
                        <select
                            placeholder="Material"
                            onChange={(event) => {
                                setProductId(event.target.value)
                                setMaterials(null)
                            }}
                            className="form-control" >
                            <option value={null}>...</option>
                            {products.map(({ name, id }, i) =>
                                <option key={i} value={id}>{`${name}`}</option>

                            )}
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Quantity</label>
                    <div className="col-sm-5">
                        <input
                            placeholder="Stock"
                            type="number"
                            onChange={(event) => setQuantity(event.target.value)}
                            className="form-control" />
                    </div>
                    <div className="col-sm-3">
                        <button
                            onClick={validateProduction}
                            className="btn btn-primary">
                            Validate!
                        </button>
                    </div>
                </div>
                <div className="mb-3 row">
                    <table>
                        <thead>
                            <tr>
                                <th>Material</th>
                                <th>Cost Per Unit</th>
                                <th>Total Cost</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody className="fw-meduim">
                            {materials ?
                                materials.map(({ name, unit, stock, pivot }, i) => (
                                    < tr key={i}
                                        className=
                                        {pivot.quantity * quantity > stock ?
                                            'text-danger bg-danger-light' :
                                            ''
                                        }
                                    >
                                        <td>{name}</td>
                                        <td>{pivot.quantity}</td>
                                        <td>{`${pivot.quantity * quantity}${unit}`}</td>
                                        <td>{`${stock}${unit}`}</td>
                                    </tr>
                                )) :
                                <></>
                            }
                        </tbody>
                    </table>
                </div>
                <div className="mb-3 text-right">
                    <button
                        onClick={() => submit({ quantity, productId })}
                        className="btn btn-success">
                        Submit
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Add
