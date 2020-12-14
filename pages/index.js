import Layout from "../components/Layout";
import Head from "next/head";
import Hero from "../components/index/Hero";
import Intro from "../components/index/Intro";
import Showcase from "../components/index/Showcase";
import Headline from "../components/index/Headline";
import Browse from "../components/index/Browse";

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Welcome to Pong!</title>
      </Head>

      <Hero />
      <Intro />
      <Browse />
      <Headline />
      <Showcase />
    </Layout>
  );
}
