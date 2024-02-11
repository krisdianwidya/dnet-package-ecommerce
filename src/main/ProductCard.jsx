import { Card, Button } from "antd";
import dnetLogo from "../dnet-logo.jpg";

import "./ProductCard.scss";

const ProductCard = ({ name, pricePerMonth, quota, speed, description }) => {
  return (
    <Card className="product-card" cover={<img alt="example" src={dnetLogo} />}>
      <h3 className="product-title">{name}</h3>
      <h2 className="product-price">Rp {pricePerMonth}</h2>
      <p className="product-quota">Kuota {quota}</p>
      <p className="product-speed">Kecepatan {speed}</p>
      <p className="product-description">{description}</p>

      <div className="product-btn-wrapper">
        <Button type="primary" shape="round" size="middle">
          Tambah ke keranjang
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
