import { Card, Button } from "antd";
import dnetLogo from "../dnet-logo.jpg";

import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <Card className="product-card" cover={<img alt="example" src={dnetLogo} />}>
      <h3 className="product-title">Unlimited Hemat</h3>
      <h2 className="product-price">Rp 350000</h2>
      <p className="product-speed">Kecepatan 20 Mbps</p>
      <p className="product-description">lorem ipsum dolor sit amet....</p>

      <div className="product-btn-wrapper">
        <Button type="primary" shape="round" size="middle">
          Tambah ke keranjang
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
