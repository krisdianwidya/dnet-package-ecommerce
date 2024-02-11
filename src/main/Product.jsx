// import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import ProductCard from "./ProductCard";
import "./Product.scss";

const Product = () => {
  const fetchProducts = async () => {
    const data = await axios.get("/api/internet-packages");
    return data;
  };

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["internetPackages"],
    queryFn: fetchProducts,
  });

  if (isPending || isFetching) return "Loading...product";

  if (error) return "An error has occurred: " + error.message;

  const internetPackagesResult = data.data.internetPackages;

  const renderedProducts = internetPackagesResult.map((product, index) => {
    return (
      <ProductCard
        key={index}
        name={product.name}
        pricePerMonth={product.pricePerMonth}
        quota={product.internetPackageType.quota}
        speed={product.internetSpeed.speed}
        description={product.description}
        inetPackageId={product.id}
      />
    );
  });

  return <div className="product-wrapper">{renderedProducts}</div>;
};

export default Product;
