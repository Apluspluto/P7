import '../Home/home.scss'
import Location from '../../components/Location';
import Background from '../../components/Background';
import fond from '../../assets/images/background.png'

function Home({data}) {
  return ( 
    <section>
    <Background image={fond} title="Chez vous, partout et ailleurs." className="home_fond"/>
    <div className='container_location'>
      {data.map(location => (
    <Location key={location.id}  id={location.id} title={location.title} cover={location.cover} location={location.location} />
      ))}
    </div>
    </section>
  ) 
}

export default Home