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
                        <th scope="col" style={{ "maxWidth": '50%' }}>Description</th>
                        <th scope="col">Materials</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {products.map((product, i) =>
                        <tr key={i}>
                            <th scope="row">#{i + 1}</th>
                            <td>
                                <img
                                    src={product.image}
                                    alt=""
                                    className='img-thumbnail'
                                    style={{ width: '120px' }}
                                />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>
                                {product.Materials.map(({ name, unit, pivot }, i) => (
                                    <div
                                        key={i}
                                        className="badge bg-primary m-1">
                                        {`${name}: ${pivot.quantity}${unit}`}
                                    </div>
                                ))}
                            </td>
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
