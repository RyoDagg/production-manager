import { useContext } from 'react'
import { globalContext } from '../../App'

const Table = ({ materials }) => {
    const { navigateTo } = useContext(globalContext)
    return (
        <div>

            <button
                onClick={() => navigateTo('/materials/add')}
                className="btn btn-lg btn-success m-4"
            >
                Add New Material
            </button>

            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col" style={{ "width": '50%' }}>Description</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {materials.map((material, i) =>
                        <tr key={i}>
                            <th scope="row">#{i + 1}</th>
                            <td>{material.name}</td>
                            <td>{material.name}</td>
                            <td>{material.description}</td>
                            <td>{material.unit}</td>
                            <td>{material.stock}</td>
                            <td>❌ ✅ 🛒</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table
