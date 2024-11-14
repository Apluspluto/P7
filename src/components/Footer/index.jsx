import kasa from '../../assets/images/kasa.png';
import '../Footer/footer.scss'

function Footer() {
    return (
        <footer>
        <img src={kasa} alt='logo kasa'/>
        <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer