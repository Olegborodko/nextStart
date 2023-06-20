import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <title>Main page</title>
        <meta keywords={"next start, meta tag" + keywords}></meta>
      </Head>
      <div className="navBar">
        <A href="/" text="Main" />
        <br />
        <A href="/users" text="Users" />
      </div>
      <div>
        {children}
      </div>
    </>
  )
};

export default MainContainer;