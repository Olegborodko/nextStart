import Link from "next/link";
import styles from "../styles/users.module.scss";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {

  return (
    <MainContainer keywords={"users"}>
      <h1 className={styles.user}>Users page</h1>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.title}
            </Link>
          </li>
        )}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
  const users = await response.json();

  return {
    props: {
      users
    },
  }
}