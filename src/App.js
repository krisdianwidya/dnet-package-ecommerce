import { useState } from "react";
import { Layout, theme } from "antd";

import { Menu } from "antd";

import { MailOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

const items = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation One",
    key: "mail2",
    icon: <MailOutlined />,
  },
];

const App = () => {
  const [current, setCurrent] = useState("mail");
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
      {/* <Content
        style={{
          padding: "0 200px",
          height: "100%",
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            height: "100%",
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
        asdasd
      </Content> */}
      <Layout style={{ height: "100%" }}>
        <Content
          style={{
            // padding: "0 200px",
            height: "100%",
            backgroundColor: "#fff",
            border: "1px solid black",
          }}
        >
          Content Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus voluptates quibusdam deleniti maiores distinctio
          nesciunt quia exercitationem ut nihil, ipsum repellat, suscipit,
          similique tempore voluptatem ipsa porro hic eveniet consequatur quasi.
          Fugiat eligendi quidem ut sit expedita eveniet ea possimus aliquam
          accusamus? Quo vitae laborum quos deleniti delectus, in, ipsa, rerum
          fugit laudantium explicabo neque dolore soluta quaerat officia nisi
          commodi nostrum sequi voluptate eos molestias autem ex? Modi nemo
          excepturi qui nihil vitae iusto explicabo corporis cupiditate natus
          nulla laboriosam, facilis illum voluptatibus ex magni ad! Harum
          laborum amet fugit veniam, rerum reiciendis. Rem earum dolorum labore
          adipisci quae.
        </Content>
        <Sider
          width="25%"
          style={{ backgroundColor: "#fff", border: "1px solid black" }}
        >
          Sider mbsxjsm scnskncks sjsbxjb Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Necessitatibus voluptates quibusdam
          deleniti maiores distinctio nesciunt quia exercitationem ut nihil,
          ipsum repellat, suscipit, similique tempore voluptatem ipsa porro hic
          eveniet consequatur quasi. Fugiat eligendi quidem ut sit expedita
          eveniet ea possimus aliquam accusamus? Quo vitae laborum quos deleniti
          delectus, in, ipsa, rerum fugit laudantium explicabo neque dolore
          soluta quaerat officia nisi commodi nostrum sequi voluptate eos
          molestias autem ex? Modi nemo excepturi qui nihil vitae iusto
          explicabo corporis cupiditate natus nulla laboriosam, facilis illum
          voluptatibus ex magni ad! Harum laborum amet fugit veniam, rerum
          reiciendis. Rem earum dolorum labore adipisci quae.
        </Sider>
      </Layout>
    </Layout>
  );
};
export default App;
