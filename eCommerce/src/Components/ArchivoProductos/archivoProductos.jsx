/* import { useProductContext } from "../../Hook/useProductContext"; */
import "./productList.css";

const archivoProductos = () => {
  const { list, loading, addToCart, search } = useProductContext();

  // 🔍 Filtrar productos según el término de búsqueda
  const filteredProductList = list.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="product-container">
      {loading ? (
        <h2>Cargando productos...</h2>
      ) : (
        filteredProductList.map((product) => (
          <article key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>💰 Precio: ${product.price}</p>
            <p>📦 Categoría: {product.category}</p>
            <button onClick={() => addToCart(product)}>🛒 Agregar al carrito</button>
          </article>
        ))
      )}
    </section>
  );
};

export default archivoProductos;
 