import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { Card, Button } from "antd";
import dnetLogo from "../dnet-logo.jpg";
import { DeleteFilled } from "@ant-design/icons";

import "./ItemCard.scss";

const ItemCard = ({ name, price, itemId }) => {
  const queryClient = useQueryClient();

  const deleteOrder = async () => {
    const data = await axios.delete("/api/order-details/" + itemId);
    return data;
  };

  const { mutate, isPending, error } = useMutation({
    mutationKey: ["cartOrder"],
    mutationFn: deleteOrder,
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
    <Card className="item-card">
      <img className="item-image" alt="example" src={dnetLogo} />
      <h3 className="item-title">{name}</h3>
      <p className="item-price">Rp {price}</p>
      <h1>{itemId}</h1>
      <Button
        onClick={handleClick}
        type="primary"
        danger
        shape="circle"
        icon={<DeleteFilled />}
      />
    </Card>
  );
};

export default ItemCard;
