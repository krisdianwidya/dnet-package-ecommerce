import { useState } from "react";
import { Layout } from "antd";
import { Menu } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

const queryClient = new QueryClient();

const App = () => {
  const [current, setCurrent] = useState("main");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <QueryClientProvider client={queryClient}>
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
            }}
          >
            <Product />
          </Content>
          <Sider
            width="25%"
            style={{
              backgroundColor: "#fff",
            }}
          >
            <Item />
          </Sider>
        </Layout>
      </Layout>
    </QueryClientProvider>
  );
};
export default App;
