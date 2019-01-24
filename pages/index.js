import Link from "next/link";
import Layout from "../components/Layout";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <h1>This is the landing page.</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learning Next.js" />
      <PostLink id="deploy-nextjs" title="Deploy with Zeit" />
    </ul>
  </Layout>
);

export default Index;
