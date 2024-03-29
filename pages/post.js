import { withRouter } from "next/router";
import Layout from "../components/Layout";

const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>Post content goes here.</p>
  </div>
));

const Page = props => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
