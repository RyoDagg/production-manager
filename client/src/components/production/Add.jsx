import { useEffect, useState } from "react"
import axios from 'axios'

const Add = ({ submit }) => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(null)
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


    return (
        <div className="row pt-3 border text-center">
            <h3 className="text-primary mt-2 mb-5">Add new Production</h3>
            <div className="col-6 mx-auto">
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Product</label>
                    <div className="col-sm-8">
                        <select
                            placeholder="Material"
                            onChange={(event) => setProduct(event.target.value)}
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
                            onClick={null}
                            className="btn btn-primary">
                            Validate!
                        </button>
                    </div>
                </div>
                <div className="mb-3 text-right">
                    <button
                        onClick={() => submit({ quantity, product })}
                        className="btn btn-success">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Add
