import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">Brand</NavLink>
            {/* <a className="navbar-brand" href="#">Brand</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link active">Home</NavLink>
                        {/* <a className="nav-link active" aria-current="page" href="/">Inicio</a> */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/">Remeras</a> */}
                        <NavLink to="/category/remeras" className="nav-link">Remeras</NavLink>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/">Gorras</a> */}
                        <NavLink to="/category/gorras" className="nav-link">Gorras</NavLink>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </div>
    </nav>
    )
}

export default NavBar;