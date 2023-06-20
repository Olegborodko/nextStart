import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.title}>
      <h1>User</h1>
      page id - {query.id}
      <br /><br />
      {user.title}
    </MainContainer>
  )
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://my-json-server.typicode.com/typicode/demo/posts/${params.id}`);
  const user = await response.json();
  console.log(user);
  return {
    props: { user },
  }
}