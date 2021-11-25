import Moge from "components/Moge";
import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import nookies from "nookies";

const Home: NextPage = () => {
  return <Moge piyo="one" />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  nookies.set(ctx, "hoge", "fuga");

  return {
    props: {},
  };
};

export default Home;
