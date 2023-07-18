import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand"><img src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png" width="180px"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/counter">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/employees">Employees</Link>
                        </li>  
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">Users</Link>
                        </li>   
                        <li className="nav-item">
                            <Link className="nav-link" to="/todo">Todo</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>   
                        <li className="nav-item">
                            <Link className="nav-link" to="/useCallbackCarts">User Carts</Link>
                        </li>   
                    </ul>
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>                          
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent;