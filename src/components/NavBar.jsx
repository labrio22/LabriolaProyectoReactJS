import CategoryList from "./CategoryList";
import CartWidget from "./CartWidget";
import './NavBar.css';

function NavBar(){
    return(
        <div className="NavBarStyle">
            <CategoryList />
            <CartWidget />
        </div>
    )
}
export default NavBar;