import { useQuery } from "@tanstack/react-query";
import { Button, Card } from "antd";
import axios from "axios";

import ItemCard from "./ItemCard";
import "./Item.scss";

const fetchCartOrder = async () => {
  const data = await axios.get("api/orders/1");
  return data;
};

const Item = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["cartOrder"],
    queryFn: fetchCartOrder,
  });

  if (isPending || isFetching) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const cartOrderResult = data.data.order.orderDetails;
  const totalBayar = data.data.order.total;
  const renderedCartOrder = cartOrderResult.map((item, index) => {
    return (
      <ItemCard
        key={index}
        name={item.internetPackage.name}
        price={item.price}
      />
    );
  });

  return (
    <div className="item-wrapper">
      <div className="item-list-wrapper">{renderedCartOrder}</div>

      <Card className="item-total-card">
        <div className="item-total-text">
          <span>Total pembayaran</span>
          <span>Rp {totalBayar}</span>
        </div>

        <div className="item-btn-wrapper">
          <Button
            type="primary"
            shape="round"
            size="middle"
            style={{ width: "100%" }}
          >
            Bayar Sekarang
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Item;
