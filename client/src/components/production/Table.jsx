import { useContext } from 'react'
import { globalContext } from '../../App'

const Table = ({ productions }) => {
    const { navigateTo } = useContext(globalContext)
    return (
        <div>

            <button
                onClick={() => navigateTo('/productions/add')}
                className="btn btn-lg btn-success m-4"
            >
                Launch New Production
            </button>

            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col"></th>
                        <th scope="col" style={{ "maxWidth": '50%' }}>Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {productions.map((production, i) =>
                        <tr key={i}>
                            <th scope="row">#{i + 1}</th>
                            <td>{production.createdAt}</td>
                            <td>
                                <img
                                    src={production.Product.image}
                                    alt=""
                                    className='img-thumbnail'
                                    style={{ width: '120px' }}
                                />
                            </td>
                            <td>{production.Product.name}</td>
                            <td>{production.quantity}</td>
                            <td>❌ ✅ 🛒</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table
