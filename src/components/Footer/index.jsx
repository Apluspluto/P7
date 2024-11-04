import kasa from '../../assets/images/kasa.png';
import '../../styles/components/footer.scss'

function Footer() {
    return (
        <footer>
        <img src={kasa} alt='logo kasa'/>
        <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer