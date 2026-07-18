import { useEffect, useMemo, useState } from "react";

const ProductSearch = () => {
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        setProductData(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    console.log("Filtering Products...");

    return productData.filter((product) =>
      product.title.toLowerCase().includes(searchData.toLowerCase())
    );
  }, [productData, searchData]);

  const handleThemeChange = () => {
    setTheme((prev) => !prev);
  };

  return (
    <div
      style={{
        background: theme ? "#222" : "#fff",
        color: theme ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Product Search using useMemo</h2>

      <input
        type="text"
        placeholder="Search Product"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />

      <button
        onClick={handleThemeChange}
        style={{ marginLeft: "10px" }}
      >
        {theme ? "Light Mode" : "Dark Mode"}
      </button>

      <hr />

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h3>{product.title}</h3>
            <p>Price: ₹{product.price}</p>
          </div>
        ))
      ) : (
        <p>No Products Found</p>
      )}
    </div>
  );
};

export default ProductSearch;