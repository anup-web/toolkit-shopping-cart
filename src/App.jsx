import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Welcome from "./pages/Home/Welcome"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Notfound from "./pages/Notfound"
import Shop from "./pages/Shop/Shop"
import { Provider } from "react-redux"
import store from "./store/store"
import Cart from "./pages/Cart"
import Productdetails from "./pages/Productdetails"

function App() {
  return (
    <div className="App">
         <Provider store={store}>
             <BrowserRouter>
               <Header />
                  <Routes>
                       <Route path="/" element={<Welcome />}></Route>
                       <Route path="/shop" element={<Shop/>} ></Route>
                       <Route path="/cart" element={<Cart/>} ></Route>
                       <Route path="/products/:id" element={<Productdetails />} ></Route>
                        <Route path="/about" element={<About/>} ></Route>
                        <Route path="/contact" element={<Contact/>} ></Route>
                        <Route path="*" element={<Notfound />} > </Route>
                  </Routes>
               <Footer />
             </BrowserRouter>
        </Provider>   
      </div>
  )
}

export default App
