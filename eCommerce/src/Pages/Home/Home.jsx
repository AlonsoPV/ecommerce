import ArchivoProductos from "../../Components/ArchivoProductos";
/* import ProductoIndividual from "../Components/ProductoIndividual"; */
import { ProductProvider } from "../../Context/ProductContext";
/* import Header from "../Components/Header"; */
import "./Home.css";
 
const Home = () => {
  return (
  
     <ProductProvider>
     {/*  <Header /> */}
      <div className="home-container">
        <div className="left">
          <h2>🛍️ Productos</h2>
          <ArchivoProductos/>
        </div>
        <div className="right">
          <h2>📦 Detalle del Producto</h2>
          {/* <ProductDetail /> */}
        </div>
      </div>
    </ProductProvider>
     
  );
};

export default Home;
