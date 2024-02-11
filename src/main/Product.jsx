// import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import ProductCard from "./ProductCard";
import "./Product.scss";
import axios from "axios";

const fetchData = async () => {
  const data = await axios.get("/api/internet-packages");
  return data;
};

const Product = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["internetPackages"],
    queryFn: fetchData,
  });

  if (isPending || isFetching) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const internetPackages = data.data.internetPackages;

  const renderedProducts = internetPackages.map((product, index) => {
    return (
      <ProductCard
        key={index}
        name={product.name}
        pricePerMonth={product.pricePerMonth}
        quota={product.internetPackageType.quota}
        speed={product.internetSpeed.speed}
        description={product.description}
      />
    );
  });

  return <div className="product-wrapper">{renderedProducts}</div>;
};

export default Product;
