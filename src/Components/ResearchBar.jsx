import '../styles/ShoppingList.css'

function ResearchBar()
{
    const handlerClickSearch = () => {
        var sneakers = document.getElementsByTagName("SneakerItem");
        var inputsearch = document.getElementById("search").value;

        for(var element of sneakers)
        {
            if(element.marque !== inputsearch || element.marque !== null)
            {
                element.style.display = "none";
            }
            else
            {
                element.style.display = "box";
            }
        }
    };

    return (
        <div className="research-container">
            <input type="text" name="search" id="search" placeholder='Marque :' />
            <button onClick={handlerClickSearch}>Chercher</button>
        </div>
    );
}

export default ResearchBar;