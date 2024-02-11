import { useEffect } from "react";

import ProductCard from "./ProductCard";
import "./Product.scss";
import axios from "axios";

const Product = () => {
  // useEffect(() => {
  //     fetch("/api/users")
  //       .then((response) => response.json())
  //       .then((json) => setUsers(json))
  //   }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/api/internet-packages");
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className="product-wrapper">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Product;
