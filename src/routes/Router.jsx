import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home";
import Tienda from "../pages/Shop";
import Carrito from "../pages/ShopCart";
import Compra from "../pages/CheckOut";
import Listadedeseos from "../pages/WishBox";
import Iniciarsesion from "../components/Forms/LogInForm";
import Registrarse from "../components/Forms/SignUpForm";
import Producto from "../pages/Product";
import ItemListContainer from "../components/Item/ItemListContainer";
import NotFound404 from "../pages/Error404";
import Footer from "../components/Footer/Footer";


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/compra" element={<Compra />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/listadedeseos" element={<Listadedeseos />} />
                <Route path="/iniciarsesion" element={<Iniciarsesion />} />
                <Route path="/registrate" element={<Registrarse />} />
                <Route path="/producto/:idProduct" element={<Producto />} />
                <Route path="/categoria/:idCategory"element={<ItemListContainer />}/>
                <Route exact path="*" element={<NotFound404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;