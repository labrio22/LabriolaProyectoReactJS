import './ItemListContainer.css';
function ItemListCointainer ({saludar}){
    return(
        <div className="greetingStyle">
            <h3>
                {saludar}
            </h3>
        </div>
    )

}

export default ItemListCointainer;