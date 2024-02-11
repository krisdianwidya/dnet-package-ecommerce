import { Card } from "antd";
import dnetLogo from "../dnet-logo.jpg";

import "./ItemCard.scss";

const ItemCard = () => {
  return (
    <Card className="item-card">
      <img className="item-image" alt="example" src={dnetLogo} />
      <h3 className="item-title">Unlimited Hemat</h3>
      <p className="item-price">Rp 350000</p>
    </Card>
  );
};

export default ItemCard;
