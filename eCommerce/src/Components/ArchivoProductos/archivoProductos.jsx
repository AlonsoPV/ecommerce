import { useProductContext } from "../../Hook/useProductContext";
import "./ArchivoProductos.css";

const ArchivoProductos = () => {
  const { list, loading, anadirCarrito, search, setSelectedProduct  } = useProductContext();

  // 🔍 Filtrar productos según el término de búsqueda
  const filteredProductList = list.filter((product) =>
    product.product_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="product-container">
      
      {loading ? (
        <h2>Cargando productos...</h2>
      ) : ( 
        filteredProductList.map((product) => (
          <article key={product._id} className="product-card" onClick={() => {
            setSelectedProduct(product) 
          }}>
            <h3>{product.product_name}</h3>
            <p>💰 Precio: ${product.price}</p>
            <p>📦 Categoría: {product.category}</p>
            <button onClick={() => anadirCarrito(product)}>🛒 Agregar al carrito</button>
          </article>
        ))
      )}
    </section>
  );
};

export default ArchivoProductos;
 
