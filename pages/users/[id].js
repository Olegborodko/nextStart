import { useRouter } from "next/router"

export default function ({ user }) {
  const { query } = useRouter();

  return (
    <>
      page id - {query.id}
      <br /><br />
      {user.title}
    </>
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