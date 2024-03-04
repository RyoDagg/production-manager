import { useState } from "react"

const Add = ({ submit }) => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()
    const [unit, setUnit] = useState()
    const [stock, setStock] = useState()

    return (
        <div className="row pt-3 border text-center">
            <div className="col-6 mx-auto">
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Name</label>
                    <div className="col-sm-8">
                        <input
                            onChange={(event) => setName(event.target.value)}
                            className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Description</label>
                    <div className="col-sm-8">
                        <input
                            onChange={(event) => setDescription(event.target.value)}
                            className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Image</label>
                    <div className="col-sm-8">
                        <input
                            onChange={(event) => setImage(event.target.value)}
                            className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-2 col-form-label">Unit</label>
                    <div className="col-sm-4">
                        <input
                            onChange={(event) => setUnit(event.target.value)}
                            className="form-control" />
                    </div>
                    <label className="col-2 col-form-label">Stock</label>
                    <div className="col-sm-4">
                        <input
                        type="number"
                            onChange={(event) => setStock(event.target.value)}
                            className="form-control" />
                    </div>
                </div>
                <div className="mb-3 text-right">
                    <button
                        onClick={() => submit({ name, description, image, unit, stock })}
                        className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    )
}

export default Add
