
const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-success shadow navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Production Manager</a>

                    <ul className="navbar-nav me-auto ml-4 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Materials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Purchases</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
