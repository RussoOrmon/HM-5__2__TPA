import styles from "./userList.module.css";
import React from "react";

const UserList = ({ userData }) => {
  const userAges = userData.sort((a, b) => (a.age < b.age ? 1 : -1));

  return (
    <ul>
      {userAges.map((item) => (
        <li key={item.id} className={styles.userLine}>
          {item.name} ({item.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UserList;
