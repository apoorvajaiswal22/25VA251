import React, { useState, useEffect } from "react";
import "./App.css";
import productsData from "./data";

function Navbar({
  cartCount,
  wishlistCount,
  search,
  setSearch,
}) {
  return (
    <nav className="navbar">
      <h1 className="logo">NYKAA</h1>

      <input
        type="text"
        placeholder="Search for products, brands and more..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="nav-right">
        <span>❤️ {wishlistCount}</span>
        <span>🛒 {cartCount}</span>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>FLAT 50% OFF</h1>
        <p>On Beauty, Makeup & Skincare Products</p>
        <button>SHOP NOW</button>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  addToCart,
  toggleWishlist,
  wishlist,
}) {
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="card">
      <div
        className="wishlist-btn"
        onClick={() => toggleWishlist(product.id)}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </div>

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p className="category">
        {product.category}
      </p>

      <div className="rating">
        ⭐ {product.rating}
      </div>

      <p className="price">
        ₹ {product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Bag
      </button>
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage(
        "Please enter a valid email"
      );
      return;
    }

    setMessage(
      "Subscribed Successfully 🎉"
    );
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h2>
        Get Beauty Tips & Exclusive Offers
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button type="submit">
          Subscribe
        </button>
      </form>

      <p>{message}</p>
    </section>
  );
}

export default function App() {
  const [products, setProducts] =
    useState([]);

  const [cart, setCart] = useState([]);

  const [wishlist, setWishlist] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(
        wishlist.filter(
          (item) => item !== id
        )
      );
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const filteredProducts =
    products.filter((product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All"
          ? true
          : product.category ===
            category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      <Navbar
        cartCount={cart.length}
        wishlistCount={
          wishlist.length
        }
        search={search}
        setSearch={setSearch}
      />

      <Hero />

      <section className="categories">
        <button
          onClick={() =>
            setCategory("All")
          }
        >
          All
        </button>

        <button
          onClick={() =>
            setCategory("Makeup")
          }
        >
          Makeup
        </button>

        <button
          onClick={() =>
            setCategory("Skincare")
          }
        >
          Skincare
        </button>

        <button
          onClick={() =>
            setCategory("Haircare")
          }
        >
          Haircare
        </button>

        <button
          onClick={() =>
            setCategory("Fragrance")
          }
        >
          Fragrance
        </button>
      </section>

      <h2 className="product-count">
        Showing {
          filteredProducts.length
        } Products
      </h2>

      <section className="products">
        {filteredProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={
                toggleWishlist
              }
              wishlist={wishlist}
            />
          )
        )}
      </section>

      <section className="cart-section">
        <h2>
          🛒 Cart ({cart.length})
        </h2>

        {cart.length === 0 ? (
          <p>No products added.</p>
        ) : (
          <>
            {cart.map(
              (item, index) => (
                <div
                  key={index}
                  className="cart-item"
                >
                  {item.title}
                  <span>
                    ₹ {item.price}
                  </span>
                </div>
              )
            )}

            <h3>
              Total: ₹ {totalPrice}
            </h3>
          </>
        )}
      </section>

      <Newsletter />

      <footer>
        <h3>Nykaa Clone</h3>
        <p>
          Beauty • Makeup •
          Skincare • Haircare
        </p>
      </footer>
    </>
  );
}