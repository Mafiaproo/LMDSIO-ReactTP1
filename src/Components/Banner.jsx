import logo from '../assets/img/logosneaker.jpg';
import '../styles/Banner.css';

function Banner()
{
    return (
        <header className='banner'>
            <img src={logo} alt="Logo Sneakers" className="banner-logo" />
            <div className="banner-content">
                <h1>Sneakers Store</h1>
                <p>Trouvez les sneakers de vos rêves</p>
            </div>
        </header>
    )
}

export default Banner;