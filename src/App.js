import React, { useState } from "react";
import "./App.css";
import { AddUser } from "./components/addUser/AddUser";
import UserList from "./components/userList/UserList";

const users = [
  {
    name: "Bayaman",
    age: 30,
    id: 1,
  },
  {
    name: "Tariel",
    age: 50,
    id: 2,
  },
  {
    name: "Baynur",
    age: 18,
    id: 3,
  },
  {
    name: "Aliya",
    age: 20,
    id: 4,
  },
];

function App() {
  const [userData, setUserData] = useState(users);

  const sendUserData = (name, age) => {
    setUserData((prev) => {
 
      return [...prev,
        {
          name:name,
          age:age,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div className="App">
      <h1>#hELlo@</h1>
      <AddUser sendUserData={sendUserData} />
      
      <UserList
        userData={userData}
      />

    </div>
  );
}

export default App;
