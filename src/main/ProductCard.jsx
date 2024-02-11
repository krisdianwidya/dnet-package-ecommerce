import { Card, Button } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import dnetLogo from "../dnet-logo.jpg";
import "./ProductCard.scss";

const ProductCard = ({
  name,
  pricePerMonth,
  quota,
  speed,
  description,
  inetPackageId,
}) => {
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
  };

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
        <Button
          onClick={handleClick}
          type="primary"
          shape="round"
          size="middle"
        >
          Tambah ke keranjang
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
