import type { NextPage } from "next";
import Head from "next/head";
import HomeTemplate from "../components/template/Hometemplate";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MAWAL - ミニマルデザインのアクセサリー</title>
        <meta
          name="description"
          content="シンプルで上質なデザインのアクセサリーとアパレルをお届けします。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </>
  );
};

export default Home;
