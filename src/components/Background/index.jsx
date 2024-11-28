import '../../pages/Home/home.scss';

function Background({ image, title, className }) {
  return ( 
    <div className='container_fond'>
        <img src={image} alt='background' className={className}/>
        <p className='home_titre'>{title}</p>
    </div>
  );
}

export default Background;