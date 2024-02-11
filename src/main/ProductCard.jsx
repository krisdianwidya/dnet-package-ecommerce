import { Card, Button } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import dnetLogo from "../dnet-logo.jpg";
import "./ProductCard.scss";
import { useState, useEffect } from "react";

const ProductCard = ({
  name,
  pricePerMonth,
  quota,
  speed,
  description,
  inetPackageId,
}) => {
  const [isInCart, setIsInCart] = useState(false);

  const postOrder = async () => {
    const data = await axios.post("/api/order-details", {
      internetPackageId: inetPackageId,
      orderId: 1,
      price: pricePerMonth,
    });
    return data;
  };

  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationKey: ["cartOrder"],
    mutationFn: postOrder,
    onSuccess: () => {
      // Invalidate the query to refetch the data
      queryClient.invalidateQueries({ queryKey: ["cartOrder"] });
    },
  });

  const handleClick = () => {
    mutate();
    setIsInCart(true);
  };

  const cartOrderData = queryClient.getQueriesData({ queryKey: ["cartOrder"] });

  useEffect(() => {
    cartOrderData[0][1].data?.order?.orderDetails.forEach((element) => {
      if (element.internetPackage.id === inetPackageId) {
        setIsInCart(true);
      }
    });
  }, [cartOrderData, inetPackageId]);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Card className="product-card" cover={<img alt="example" src={dnetLogo} />}>
      <h3 className="product-title">{name}</h3>
      <h2 className="product-price">Rp {pricePerMonth}</h2>
      <p className="product-quota">Kuota {quota}</p>
      <p className="product-speed">Kecepatan {speed}</p>
      <p className="product-description">{description}</p>

      <div className="product-btn-wrapper">
        {isInCart ? (
          <Button disabled type="primary" shape="round" size="middle">
            Paket sudah di keranjang
          </Button>
        ) : (
          <Button
            onClick={handleClick}
            type="primary"
            shape="round"
            size="middle"
          >
            Tambah ke keranjang
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
