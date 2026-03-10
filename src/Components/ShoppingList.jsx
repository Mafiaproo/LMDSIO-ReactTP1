import { sneakersList } from "../datas/sneakerList";
import SneakerItem from "./SneakerItem";
import '../styles/ShoppingList.css'
import ResearchBar from "./ResearchBar";


function ShoppingList()
{
    
    return (
        <div className="shopping-list">
            <h2>Nos Sneakers</h2>
            <ResearchBar/>
            <div className="sneakers-grid">

                {sneakersList.map((sneaker) => (
                    <SneakerItem 
                        key={sneaker.id}
                        nom={sneaker.nom}
                        image={sneaker.image}
                        marque={sneaker.marque}
                        prix={sneaker.prix}
                        style={sneaker.style}
                        esthetique={sneaker.esthetique}
                        confort={sneaker.confort}
                        bestSeller={sneaker.bestSeller}
                        
                    />
                ))}
            </div>
        </div>
    )
}

export default ShoppingList;