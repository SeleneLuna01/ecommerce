import {Routes, Route} from "react-router-dom"
import Detalle from '../Pages/Detalle';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Registro from "../Pages/Registro";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import NotFound from '../Pages/NotFound';
import AltaProducto from "../Pages/ABMproductos/AltaProducto";
import ModificarProducto from "../Pages/ABMproductos/ModificarProducto"


function Public() {
    return (
        <div>
            <Menu/>
            <Routes>
                <Route path="/producto/alta" element={<AltaProducto />} />
                <Route path="/producto/modificar/:id" element={<ModificarProducto />} />
                <Route path="/producto/:id" element={<Detalle />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
        </div>
    );
}
  
export default Public;