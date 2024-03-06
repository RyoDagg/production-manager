import { useContext } from 'react'
import { globalContext } from '../../App'
import moment from 'moment';

const Table = ({ sales }) => {
    const { navigateTo } = useContext(globalContext)
    return (
        <div>

            <button
                onClick={() => navigateTo('/sales/add')}
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
                        <th scope="col">Product</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Client</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {sales.map((sale, i) =>
                        <tr key={i}>
                            <th scope="row">#{i + 1}</th>
                            <td>
                                {moment(sale.createdAt).format('D/MMM/YYYY - hh:mm')}
                            </td>
                            <td>
                                <img
                                    src={sale.Product.image}
                                    alt=""
                                    className='img-thumbnail'
                                    style={{ width: '120px' }}
                                />
                            </td>
                            <td>{sale.Product.name}</td>
                            <td>{sale.unitPrice}TND</td>
                            <td>{sale.quantity}</td>
                            <td>{sale.client}</td>
                            <td>{sale.quantity * sale.unitPrice}TND</td>
                            <td>❌ ✅ 🛒</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table
