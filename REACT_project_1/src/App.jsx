import React, { useState } from "react";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState([])

  return (
    <div className="p-3 h-screen w-screen bg-gray-800 flex flex-col gap-4 overflow-hidden">

      <div>
        <NavBar setToggle={setToggle} />
      </div>

      {toggle ? (
        <div className="flex gap-4 ">
          {
            user.map((elem) => {
              return <UserCard user={elem} />
            })
          }
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen w-screen  ">
          <Form setToggle={setToggle} setUser={setUser} />
        </div>
      )}

    </div>
  );
};

export default App;
