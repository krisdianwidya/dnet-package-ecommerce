import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Card } from "antd";
import axios from "axios";

import ItemCard from "./ItemCard";
import "./Item.scss";

const Item = () => {
  const [totalBayar, setTotalBayar] = useState(10);

  const fetchCartOrder = async () => {
    const data = await axios.get("api/orders/1");
    return data;
  };

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["cartOrder"],
    queryFn: fetchCartOrder,
  });

  useEffect(() => {
    let total = 0;
    data?.data?.order?.orderDetails.forEach((element) => {
      total = total + element.price;
    });
    setTotalBayar(total);
  }, [data]);

  if (isPending || isFetching) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  //   let cartOrderResult = data.data.order.orderDetails;
  //   let totalBayar = data.data.order.total;

  const renderedCartOrder = data?.data?.order?.orderDetails.map(
    (item, index) => {
      return (
        <ItemCard
          key={index}
          name={item.internetPackage.name}
          price={item.price}
        />
      );
    }
  );

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
