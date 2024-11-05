import { Link } from 'react-router-dom'
import kasa from '../../assets/images/kasa.png';
import '../../styles/components/header.scss';

function Header() {
    return (
        <header>
        <div>
        <img src={kasa} alt='logo kasa'/>
        </div>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/Propos">A propos</Link>
        </nav>
        </header>
    )
}

export default Header