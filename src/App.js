import { useState } from "react";
import { Layout } from "antd";
import { Menu } from "antd";

import Product from "./main/Product";
import Item from "./keranjang/Item";

const { Content, Sider } = Layout;
const items = [
  {
    label: "Main Menu Paket Internet",
    key: "main",
  },
  {
    label: "Paket Internet Milik Saya",
    key: "customer",
  },
];

const App = () => {
  const [current, setCurrent] = useState("main");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ padding: "0 200px" }}
      />
      <Layout style={{ height: "100%" }}>
        <Content
          style={{
            height: "100%",
            backgroundColor: "#fff",
            // border: "1px solid black",
          }}
        >
          <Product />
        </Content>
        <Sider
          width="25%"
          style={{
            backgroundColor: "#fff",
            //   border: "1px solid black"
          }}
        >
          <Item />
        </Sider>
      </Layout>
    </Layout>
  );
};
export default App;
