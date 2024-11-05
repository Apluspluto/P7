import '../../styles/pages/home.scss'
import fond from '../../assets/images/background.png'
import Location from '../../components/Location';

function Home({data}) {
  return ( 
    <section>
    <div className='container_fond'>
        <img src={fond} alt='background' className="home_fond"/>
        <p className='home_titre'>Chez vous, partout et ailleurs.</p>
    </div>
    <Location data={data} />
    </section>
  ) 
}

export default Home