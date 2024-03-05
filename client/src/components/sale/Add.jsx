import { useEffect, useState } from "react"
import axios from 'axios'

const Add = ({ submit }) => {
    const [products, setProducts] = useState([])
    const [productId, setProductId] = useState(null)
    const [quantity, setQuantity] = useState(0)
    const [unitPrice, setUnitPrice] = useState(0)
    const [client, setClient] = useState('')
    const [valid, setValid] = useState(false)
    const [stocks, setStocks] = useState({})

    useEffect(() => { fetchSelectProds() }, [])

    // fetch products for select input 
    const fetchSelectProds = async () => {
        try {
            const { data } = await axios('http://127.0.0.1:3000/api/product/select')
            setProducts(data)
            const stockIds = {};

            data.forEach(({ id, stock }) => {
                stockIds[id] = stock
            });
            setStocks(stockIds)
        } catch (error) {
            console.log('Error fetching products!!', error);
        }
    }

    useEffect(() => {
        if (productId) {
            setValid(quantity <= stocks[productId])
        } else {
            setValid(false)
        }
    }, [quantity, productId])

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
                                setProductId(event.target.value)
                            }}
                            className="form-control" >
                            <option value={null}>...</option>
                            {products.map(({ name, id, stock }, i) =>
                                <option key={i} value={id}>{`${name} (${stock})`}</option>

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
                    <label className="col-4 col-form-label">Client</label>

                    <div className="col-sm-8">
                        <input
                            placeholder="Client"
                            onChange={(event) => {
                                setClient(event.target.value)
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
                        disabled={!valid}
                        onClick={() => submit({ ProductId: productId, quantity, unitPrice, client })}
                        className="btn btn-success">
                        Submit
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Add
