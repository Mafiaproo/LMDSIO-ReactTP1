import '../styles/SneakerItem.css'
import CustomerReview from './CustomerReview';
import { useState } from 'react';

function SneakerItem({nom, image, marque, prix, style, esthetique, confort, bestSeller=false})
{
    const [showReviews, setShowReviews] = useState(false);

    const handleToggleAvis = () => {
        setShowReviews(!showReviews);
    }

    const formatReview = (reviewType, scaleValue) => {
        const scaleType = reviewType === 'confort' ? '😌' : '💖';
        const icons = scaleType.repeat(scaleValue);
        return `${reviewType}: ${icons} (${scaleValue}/5)`;
    };

    var recherche = document.getElementById("marque-input")?.value;


        return (
    
        <div className={`sneaker-item ${bestSeller ? 'best-seller' : ''}`} >
            <br />
            <div className="sneaker-label">
                <h3>{nom}</h3>
            </div>

            {bestSeller && <span className="best-seller-badge">Top vente</span>}
            <img className='sneaker-image' alt='' src={image} />
            <div className="card-content">
                <p className="sneaker-brand">{marque}</p>
                <p className="sneaker-style">{style}</p>
                <p className="sneaker-price">{prix} €</p>
                <br />
                <button className='sneaker-review-btn' onClick={handleToggleAvis}><strong>{showReviews ? 'Masquer les avis' : 'Voir les avis'}</strong></button>
                {showReviews && (
                    <div className="avis-details">
                        <CustomerReview reviewType='esthétisme' scaleValue={esthetique} />
                        <CustomerReview reviewType='confort' scaleValue={confort} />
                    </div>
                )}
            </div>
        </div>
    
        );

    
}

export default SneakerItem;