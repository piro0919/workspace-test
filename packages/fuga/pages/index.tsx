import type { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";

const Home: NextPage = (props) => {
  console.log(props);

  return <div>fuga</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);

  return {
    props: {
      cookies,
    },
  };
};

export default Home;
