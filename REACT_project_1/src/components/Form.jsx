import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUser, setToggle, user, UpdatedData }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: UpdatedData,
  });

  let formSubmit = (data) => {
    console.log(data);
    console.log(user);
    let arr = [...user, data];
    setUser(arr);
    localStorage.setItem("users", JSON.stringify(arr));
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-6 ">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-60 flex flex-col gap-4 p-4 rounded-xl border border-gray-500 text-white bg-black"
      >
        <h1 className="w-full flex items-ceneter justify-center text-xl font-bold">
          Create User
        </h1>

        <input
          {...register("name", {
            required: "name is required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters are required",
            },
          })}
          className="p-2 rounded-xl bg-black outline-0 border border-gray-500"
          type="text"
          placeholder="name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter valid email",
            },
          })}
          className="p-2 rounded-xl bg-black outline-0 border border-gray-500"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register("mobile", {
            required: "mobile no. is required",
            minLength: {
              value: 10,
              message: "minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "maximum 10 digits are required",
            },
          })}
          className="p-2 rounded-xl bg-black outline-0 border border-gray-500"
          type="text"
          placeholder="mobile"
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}

        <input
          {...register("image", {
            required: "imageUrl is required",
          })}
          className="p-2 rounded-xl bg-black outline-0 border border-gray-500"
          type="url"
          placeholder="image"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        <button className="bg-blue-600 text-white px-2 py-2 rounded-xl ">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
