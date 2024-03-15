import React from "react";

const Heropage = () => {
  return (
    <div className="w-11/12 py-8 px-8 my-8 ">
      <div className="flex flex-wrap justify-around items-center mx-auto ml-12 ">
        {/* left-content */}

        <div className="flex flex-col gap-4 ">
          <h1 className="text-5xl font-bold ">
            {" "}
            Good Health <br /> Starts Here! <br /> Get your <br /> discomforts{" "}
            <br /> Diagomosed!
          </h1>
          <p className="">Approved by the NHS</p>

          <form class="max-w-md">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-green-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-green-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-green-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-green-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green dark:focus:ring-green-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Right-content */}

        <div className="max-w-[450px]">
          <img
            src="/src/assets/Docter bg.svg"
            alt="Healthcare image"
            className=""
            width={1024}
            height={490}
          />
        </div>
      </div>
    </div>
  );
};

export default Heropage;

{
  /* <div className=" space-y-3">
<h1 className="font-serif font-bold text-[35px] leading-[1.2] text-black">
  Good Health Starts Here! Get your discomforts Diagomosed!
</h1>
<p className="text-xl text-black text-lg my-4">Approved by the NHS</p>
<form class="max-w-md sm:mx-auto ">
  <label
    for="default-search"
    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    search
  </label>
  <div class="relative ">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        class="w-4 h-4 text-green-500 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      class="block   w-full p-5 ps-10 text-sm text-green-700 border border-green-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-grren-500 dark:bg-green-600 dark:border-green-600 dark:placeholder-white dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
      placeholder="Search your Health...."
      required
    />
    <button
      type="submit"
      class="text-white absolute end-2.5 bottom-2.5 bg-grren-70 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2  border dark:focus:ring-blue-800 border border-green-500 hover:border-transparent rounded"
    >
      Search
    </button>
  </div>
</form>

<div className=" max-w-[450px]">
  <img
    src="/src/assets/Docter bg.svg"
    alt="Healthcare image"
    className=""
    width={1024}
    height={490}
  />
</div>
</div> */
}
