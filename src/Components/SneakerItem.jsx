import '../styles/SneakerItem.css'
import CustomerReview from './CustomerReview';

function SneakerItem({nom, image, marque, prix, style, esthetique, confort})
{
    return (
        <a href="/">
            <div className="sneaker-item">
                <h3>{nom}</h3>
                <img className='sneaker-image' alt='' src={image} />
                <div className="card-content">
                    <p className="sneaker-brand">{marque}</p>
                    <p className="sneaker-price">{prix} €</p>
                    <p className="sneaker-style">{style}</p>
                    <div className="sneaker-review">
                        <CustomerReview reviewType='esthétisme' scaleValue={esthetique} />
                        <CustomerReview reviewType='confort' scaleValue={confort} />
                    </div>
                </div>
            </div>
        </a>
    );
}

export default SneakerItem;