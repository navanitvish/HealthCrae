import React from "react";

const Assistance = () => {
  return (
    <section className="bg-cover bg-center py-4 py-40">
      <img src="" alt="" />
      <div className="w-11/12 m-auto flex justify-center items-center gap-12 ">
        {/* left-side */}
        <div className="w-[500px] mx-8">
          <img src="/src/assets/2docter.svg" alt="" />
        </div>
        {/* Right-side text content */}
        <div className="w-[400px]  md:text-left flex flex-col gap-4">
          <h3 className="font-bold text-[20px] text-balance leading-[1.2] text-black flex flex-col">
            Get assistance through <br /> our community topic
          </h3>
          <p className="text-xl text-black text-lg my-4 font-normal">
            Make connections with people who have similar health stories and
            exchange advice on our forums. Our forums covers a wide range of
            health topics. Medical Experts also add insight to these topics
            regularly.
          </p>
          <div className="grid grid-cols-3 gap-4 w-[300px] justify-">
            <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              Cold
            </button>

            <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              Headache
            </button>

            <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              Diabetes
            </button>

            <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              Fever
            </button>

            <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              cough
            </button>

            <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
              Body Pain
            </button>
          </div>
          <div>
            <form class="max-w-md ">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
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
                  class="block  w-full p-5 ps-10 text-sm text-green-700 border border-green-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-grren-500 dark:bg-green-600 dark:border-green-600 dark:placeholder-white dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="Search for topics...."
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistance;
