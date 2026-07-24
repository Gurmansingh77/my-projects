import React from "react";

const NavBar = ({ setToggle }) => {
  return (
    <div className="bg-black text-white flex items-center justify-between p-4 rounded-xl">
      <div>
        <img
          width={40}
          className="rounded-full "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkZhBBHsM4bQtOKs6pdRBExpGZ7Pw0Qm3Hu9N-384XQ&s=10"
          alt=""
        />
      </div>
      <div className="flex gap-6 font-semibold cursor-pointer">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
        onClick={() => setToggle((prev => !prev))}
        className="bg-blue-600 p-2 rounded font-semibold cursor-pointer"
      >
        Create User
      </button>
    </div>
  );
};

export default NavBar;
