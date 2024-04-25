import CategoryList from "./CategoryList";
import CartWidget from "./CartWidget";


function NavBar(){
    return(
        <div>
            <CartWidget />
            <CategoryList />
        </div>
    )
}
export default NavBar;