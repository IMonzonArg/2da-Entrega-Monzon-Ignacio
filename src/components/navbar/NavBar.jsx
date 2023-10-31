import CartWidget from "../CartWidget/CartWidget"
import '../navbar/NavBar.css';
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="NavBar">
            <Link to='/'>
            <h3 className="titulo">3ER Brother Bebidas</h3>
            </Link>
            <div className="navbarButtons">
                <NavLink to={'/category/Licor'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Licores</NavLink>
                <NavLink to={'/category/Destilado'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Destilados</NavLink>

                <NavLink to={'/category/Vino'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Vinos</NavLink>
                <NavLink to={'/category/Espirituosa'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Espirituosas</NavLink>

            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
