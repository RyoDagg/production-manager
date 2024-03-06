import { useContext } from "react"
import { globalContext } from "../App"
import { useLocation } from "react-router-dom"

const Navbar = () => {
    const { navigateTo } = useContext(globalContext)
    const { pathname } = useLocation()
    const resourse = pathname.split("/")[1];
    console.log(resourse);

    return (
        <div>
            <nav className="navbar shadow navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Production Manager</a>

                    <ul className="navbar-nav me-auto ml-4 mb-2 mb-lg-0">
                        <li 
                        className={resourse == 'materials' ? "nav-item active" : "nav-item"}>
                            <a
                                onClick={() => { navigateTo('/materials') }}
                                className="nav-link"
                                href="#"
                            >
                                Materials
                            </a>
                        </li>
                        <li 
                        className={resourse == 'products' ? "nav-item active" : "nav-item"}>
                            <a
                                onClick={() => { navigateTo('/products') }}
                                className="nav-link"
                                href="#"
                            >
                                Products
                            </a>
                        </li>
                        <li 
                        className={resourse == 'productions' ? "nav-item active" : "nav-item"}>
                            <a
                                onClick={() => { navigateTo('/productions') }}
                                className="nav-link"
                                href="#"
                            >Productions</a>
                        </li>
                        <li 
                        className={resourse == 'sales' ? "nav-item active" : "nav-item"}>
                            <a
                                onClick={() => { navigateTo('/sales') }}
                                className="nav-link"
                                href="#">
                                Sales
                            </a>
                        </li>
                        <li 
                        className={resourse == 'purchases' ? "nav-item active" : "nav-item"}>
                            <a
                                onClick={() => { navigateTo('/purchases') }}
                                className="nav-link"
                                href="#">Purchases</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
