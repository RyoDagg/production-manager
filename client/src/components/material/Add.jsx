const Add = () => {
    return (
        <div className="row pt-3 border text-center">
            <div className="col-6 mx-auto">
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-4 col-form-label">Name</label>
                    <div className="col-sm-8">
                        <input className="form-control" id="staticEmail" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-4 col-form-label">Description</label>
                    <div className="col-sm-8">
                        <input className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-4 col-form-label">Image</label>
                    <div className="col-sm-8">
                        <input className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-2 col-form-label">Unit</label>
                    <div className="col-sm-4">
                        <input className="form-control" id="inputPassword" />
                    </div>
                    <label htmlFor="inputPassword" className="col-2 col-form-label">Stock</label>
                    <div className="col-sm-4">
                        <input className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="mb-3 text-right">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    )
}

export default Add
