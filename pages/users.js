import Link from "next/link";
import { useState } from "react";
import styles from "../styles/users.module.scss";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'petya' },
    { id: 2, name: 'vasya' },
  ]);
  return (
    <>
      <h1 className={styles.user}>Users page</h1>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default Users;