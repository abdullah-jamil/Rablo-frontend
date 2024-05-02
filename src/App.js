
import './App.css';
import Footer from "./components/footer/footer.jsx";
import Product1 from "./components/products/products.jsx";
import AddProduct from "./components/addProduct/addProduct.jsx";

function App() {
  return (
    <div className="App">
       <Product1 />
       {/* <AddProduct />/ */}
       <Footer/>
    </div>
  );
}

export default App;
