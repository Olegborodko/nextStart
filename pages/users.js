import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/users.module.scss";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'petya' },
    { id: 2, name: 'vasya' },
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
      const data = await response.json();
      console.log(data);
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <>
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
    </>
  );
};

export default Users;