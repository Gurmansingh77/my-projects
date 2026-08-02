import React, { useState } from "react";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [UpdatedData , setUpdatedData] = useState(null)
  console.log(UpdatedData)

  const delUser = (id) => {
    let filterUsers = user.filter((val, index) => {
      return index !== id;
    });
    console.log(filterUsers);
    setUser(filterUsers);
    localStorage.setItem("users", JSON.stringify(filterUsers));
  };

  return (
    <div className="p-3 h-screen w-screen bg-gray-800 flex flex-col gap-4 overflow-hidden">
      <div>
        <NavBar setToggle={setToggle} />
      </div>

      {toggle ? (
        <div className="flex gap-4 ">
          {user.map((elem, index) => {
            return <UserCard setUpdatedData={setUpdatedData} user={elem} ind={index} del={delUser} setToggle={setToggle} />;
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen w-screen  ">
          <Form UpdatedData={UpdatedData}  user={user} setToggle={setToggle} setUser={setUser} />
        </div>
      )}
    </div>
  );
};

export default App;
