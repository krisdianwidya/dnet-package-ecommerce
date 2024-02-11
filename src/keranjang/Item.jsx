import ItemCard from "./ItemCard";
import { Button, Card } from "antd";
import "./Item.scss";

const Item = () => {
  return (
    <div className="item-wrapper">
      <div className="item-list-wrapper">
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>

      <Card className="item-total-card">
        <div className="item-total-text">
          <span>Total pembayaran</span>
          <span>Rp 900000</span>
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
