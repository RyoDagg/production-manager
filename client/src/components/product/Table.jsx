import { useContext } from 'react'
import { globalContext } from '../../App'

const Table = ({ products }) => {
    const { navigateTo } = useContext(globalContext)
    return (
        <div>

            <button
                onClick={() => navigateTo('/products/add')}
                className="btn btn-lg btn-success m-4"
            >
                Add New Product
            </button>

            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col" style={{ "width": '50%' }}>Description</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {products.map((product, i) =>
                        <tr key={i}>
                            <th scope="row">#{i + 1}</th>
                            <td>{product.name}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.stock}</td>
                            <td>❌ ✅ 🛒</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table
