import { useCart } from "../context/CartContext";
import "./header.css";

const Header = () => {
  const { cartCount, setSearch } = useCart();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="header__container">
      <a href="/" className="header__logo">🛍️ Mi Tienda</a>

      <div className="header__search-container">
        <input
          className="header__input-search"
          type="search"
          placeholder="Buscar productos..."
          onChange={handleSearch}
        />
      </div>

      <div className="header__cart">
        🛒 <span>{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
