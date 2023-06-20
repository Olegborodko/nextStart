import Head from "next/head";
import A from "../components/A";

const Index = () => {
  return (
    <>
      <Head>
        <title>Main page</title>
        <meta keywords="next start, meta tag"></meta>
      </Head>
      <div className="navBar">
        <A href="/" text="Main" />
        <br />
        <A href="/users" text="Users" />
      </div>
      <h1>Main page</h1>
    </>
  );
};

export default Index;