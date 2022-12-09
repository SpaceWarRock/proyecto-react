import { Link } from "react-router-dom";
const Categorias = () => {
    return ( 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-link">
                        <button className='btn btn-secondary'><Link className="nav-link" to={"/"}><i className="fas fa-home fa-lg"></i></Link></button>
                </li>
                <li className="nav-link">
                    
                        <button className='btn btn-secondary'><Link className="nav-link" to={"/category/notebook"}><i className="fas fa-laptop fa-lg"></i></Link></button>
                    
                </li>
                <li className="nav-link">
                    
                        <button className='btn btn-secondary'><Link className="nav-link" to={"/category/celulares"}><i className="fas fa-mobile fa-lg"></i></Link></button>
                    
                </li>
                <li className="nav-link">
               
                        <button className='btn btn-secondary'><Link className="nav-link" to={"/category/tv"}><i className="fas fa-tv fa-lg"></i></Link></button>
                    
                </li>
                <li className="nav-link">
                   
                        <button className='btn btn-secondary'><Link className="nav-link" to={"/category/accesorios"}><i className="fas fa-headphones fa-lg"></i></Link></button>
                    
                </li>
            </ul>

    );
}

export default Categorias;