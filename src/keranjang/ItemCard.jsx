import { Card, Button } from "antd";
import dnetLogo from "../dnet-logo.jpg";
import { DeleteFilled } from "@ant-design/icons";

import "./ItemCard.scss";

const ItemCard = ({ name, price }) => {
  return (
    <Card className="item-card">
      <img className="item-image" alt="example" src={dnetLogo} />
      <h3 className="item-title">{name}</h3>
      <p className="item-price">Rp {price}</p>
      <Button type="danger" shape="circle" icon={<DeleteFilled />} />
    </Card>
  );
};

export default ItemCard;
