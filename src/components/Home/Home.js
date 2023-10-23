import React from "react";
import StoryList from "../StoryList";
import StoryForm from "../StoryForm";
import { Layout } from "antd";

const { Sider, Content } = Layout;

function Home() {
  return (
    <Layout>
      <Sider width={400}>
        <StoryForm />
      </Sider>
      <Content>
        <StoryList />
      </Content>
    </Layout>
  );
}

export default Home;
