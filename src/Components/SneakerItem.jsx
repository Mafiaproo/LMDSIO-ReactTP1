import '../styles/SneakerItem.css'
import CustomerReview from './CustomerReview';

function SneakerItem({nom, image, marque, prix, style, esthetique, confort, bestSeller=false})
{
    const handleClickAvis = () => {
        const esthetismeText = formatReview('esthétisme', esthetique);
        const confortText = formatReview('confort', confort);
        alert(`Avis pour ${nom}:\n${esthetismeText}\n${confortText}`);
    };
    const formatReview = (reviewType, scaleValue) => {
        const scaleType = reviewType === 'confort' ? '😌' : '💖';
        const icons = scaleType.repeat(scaleValue);
        return `${reviewType}: ${icons} (${scaleValue}/5)`;
    };

    var recherche = document.getElementById("marque-input")?.value;

    if(marque === recherche || recherche === null)
    {
        return (
        <a href="/">
            <div className={`sneaker-item ${bestSeller ? 'best-seller' : ''}`} style={recherche === marque || recherche === '' ? '' : 'display: none;'}>
                <br />
                <h3>{nom}</h3>
                {bestSeller && <span className="best-seller-badge">Top vente</span>}
                <img className='sneaker-image' alt='' src={image} />
                <div className="card-content">
                    <p className="sneaker-brand">{marque}</p>
                    <p className="sneaker-style">{style}</p>
                    <p className="sneaker-price">{prix} €</p>
                    <br />
                    <button className='sneaker-review-btn' onClick={handleClickAvis}><strong>Voir les avis</strong></button>
                </div>
            </div>
        </a>
        );
    }
    else
    {
        return(<span></span>);
    }
    
}

export default SneakerItem;