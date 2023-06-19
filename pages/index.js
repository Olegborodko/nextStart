import Link from "next/link";

const Index = () => {
  return (
    <>
      <div className="navBar">
        <Link href="/" className="app-subnav__link">
          Main
        </Link>
        <br />
        <Link href="/users" className="app-subnav__link">
          Users
        </Link>
      </div>
      <h1>Main page</h1>
      <style jsx>
        {`
          .navBar {
            background: orange;
          }
          .app-subnav__link{
            background: blue;
            text-decoration: none;
            font-size: 30px;
          }
        `}
      </style>
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
};

export default Index;