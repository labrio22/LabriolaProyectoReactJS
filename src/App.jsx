import "./App.css";
import Brand from "./components/Brand";
import ItemListCointainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
return <div>
        <div>
        <Brand />
        <NavBar />
        </div>
        <ItemListCointainer saludar="Bienvenidos, gracias por visitarnos"/>
    </div>
}

export default App;
