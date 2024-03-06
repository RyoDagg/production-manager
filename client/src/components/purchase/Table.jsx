import { useContext } from 'react'
import { globalContext } from '../../App'
import moment from 'moment'

const Table = ({ purchases }) => {
    const { navigateTo } = useContext(globalContext)
    return (
        <div>

            <button
                onClick={() => navigateTo('/purchases/add')}
                className="btn btn-lg btn-success m-4"
            >
                Record New Purchses
            </button>

            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col"></th>
                        <th scope="col">Material</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {purchases.map((purchase, i) =>
                        <tr key={i}>
                            <th scope="row">#{i + 1}</th>
                            <td>
                                {moment(purchase.createdAt).format('D/MMM/YYYY - hh:mm')}
                            </td>
                            <td>
                                <img
                                    src={purchase.Material.image}
                                    alt=""
                                    className='img-thumbnail'
                                    style={{ width: '120px' }}
                                />
                            </td>
                            <td>{purchase.Material.name}</td>
                            <td>{purchase.unitPrice}TND</td>
                            <td>{purchase.quantity}</td>
                            <td>{purchase.supplier}</td>
                            <td>{purchase.quantity * purchase.unitPrice}TND</td>
                            <td>❌ ✅ 🛒</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table
