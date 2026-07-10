import { useEffect, useState } from "react";

function CategoryData() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");



  const fetchProducts = async () => {
    let url = "https://dummyjson.com/products";

    if (search) {
      url = `https://dummyjson.com/products/search?q=${search}`;
    }

    if (category) {
      url = `https://dummyjson.com/products/category/${category}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    setProducts(data.products);
  };

useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [search, category]);

  const handleSort = (type) => {
    let sorted = [...products];

    switch (type) {
      case "low":
        sorted.sort((a, b) => a.price - b.price);
        break;

      case "high":
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;

      case "az":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "za":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;

      default:
        break;
    }

    setProducts(sorted);
  };

  return (
    <div className="bg-white">
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="groceries">Groceries</option>
      </select>

      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low">Price Low → High</option>
        <option value="high">Price High → Low</option>
        <option value="rating">Rating</option>
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
      </select>

      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryData;