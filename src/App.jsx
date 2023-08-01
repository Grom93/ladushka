import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css"
import axios from "axios";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Favorites from "./components/favorites/Favorites";
import Form from "./components/Form";
import Basket from "./components/basket/Basket";
import React, { useState, useEffect } from "react";
import Description from "./components/description/Description";
import {ProductInfo} from  "./components/cart/ProductInfo";


export const AppContext = React.createContext({})

function App() {

  // хранение данных
const [product, setProduct] = useState( [] )
const [favorites, setFavorites] = useState( [] )
const [overlayItems, setOverlayItems] = useState([])
const [show, setShow] = useState(false)


useEffect (()=>{
  async function axiosData(){
    const productData = await axios.get("https://64873bf7beba629727904928.mockapi.io/tyrt")
    
    

    const favoritesData = await axios.get("https://649063631e6aa71680cb2a6f.mockapi.io/favorites")
    
    

    const cartData = await axios.get("https://649063631e6aa71680cb2a6f.mockapi.io/cart")
    
    

    setProduct(productData.data)
    setFavorites(favoritesData.data)
    setOverlayItems(cartData.data)
    
  }
  axiosData();

},[])

const deleteItems=(id) => {
  axios.delete(`https://649063631e6aa71680cb2a6f.mockapi.io/cart/${id}`)
  setOverlayItems((objDelete) => objDelete.filter(item=>item.id !== id))
}

const isAdded=(myId) => {
  return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
}

const isFav=(myId) => {
  return favorites.some((objIsFav)=> objIsFav.myId === myId)
}

const handleClose = () => setShow(false)
const handleShow = () => setShow(true);
  

  return (
    

    <AppContext.Provider
    value={
      {
      product,
      favorites,
      overlayItems,
      setProduct,
      setFavorites,
      setOverlayItems,
      isFav,
      isAdded,
      show,
      setShow,
      handleShow,
      handleClose

      
    }
    }>
    <div>

      <Router>
    <Header
    show={show}
    setShow={setShow}
    handleClose ={handleClose }
    handleShow ={handleShow }
    />
    
    <Routes>
    <Route path="/favorites"
      element={
        <Favorites
        favorites={favorites}
        setFavorites={setFavorites}
        item={product}
        overlayItems={overlayItems}
        setOverlayItems={setOverlayItems}
        />
      }/>

      <Route path="/"
      element={
        <Home 
        item={product}
        favorites={favorites}
        setFavorites={setFavorites}
        overlayItems={overlayItems}
        setOverlayItems={setOverlayItems}
        />
      }/>

      <Route path="/productInfo/:id"
          element={
        <ProductInfo/>
      }/>

      <Route path="/form"
      element={
        <Form/>
      }/>

<Route path="/cart"
      element={
        <Basket
        totalPrice={
          overlayItems.reduce((element = overlayItems.length, obj)=>
          element+obj.price, 0
          )
        }
        overlayProp={overlayItems}
        deleteItems={deleteItems}
        />
      }/>
        <Route path="/description"
      element={
        <Description/>
      }/>

        
      
        
    
      </Routes>
    </Router>
    <Footer/>
    </div>

    </AppContext.Provider>
    
    
     
  );
}

export default App;
