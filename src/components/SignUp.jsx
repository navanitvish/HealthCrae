import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatpassword: "",
    accept: true,
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("print all data is saved");
    console.log(formData);
  }
  return (
    <div className="w-8/12 bg-red-100 bg-cover  flex justify-evenly items-center mx-auto mt-20 p-12  rounded-lg ">
      <div className="max-w-[450px]">
        <img src="/src/assets/undraw_sign_in_re_o58h.svg" alt="" />
      </div>
      <div className="h-[25rem] bg-black w-1 "></div>
      <div>
        <form class="max-w-sm mx-auto " onSubmit={submitHandler}>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
            >
              Your email
            </label>
            <input
              onChange={changeHandler}
              type="email"
              id="email"
              name="email"
              value={FormData.email}
              class="w-[30rem] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Your password
            </label>
            <input
              onChange={changeHandler}
              type="password"
              id="password"
              name="password"
              value={FormData.password}
              placeholder="Password"
              class="w-[30rem] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Repeat password
            </label>
            <input
              onChange={changeHandler}
              type="password"
              id="repeat-password"
              name="repeatpassword"
              value={FormData.repeatpassword}
              class="w-[30rem] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              placeholder="Repeat Password"
            />
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input
                onChange={changeHandler}
                type="checkbox"
                id="accept"
                name="accept"
                checked={FormData.accept}
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-white dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="terms"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              I agree with the{" "}
              <a
                href="#"
                class="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
