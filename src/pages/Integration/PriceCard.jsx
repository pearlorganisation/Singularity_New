import React from "react";

const PriceCard = ({ name, price ,features}) => {
  return (
    <div class="rounded-2xl grow basis-[300px] border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
      <div class="text-center">
        <h2 class="text-lg font-medium text-gray-900">
          {name}
          <span class="sr-only">Plan</span>
        </h2>

        <p class="mt-2 sm:mt-4">
          <strong class="text-3xl font-bold text-gray-900 sm:text-4xl">
            {" "}
            {price}${" "}
          </strong>

          <span class="text-sm font-medium text-gray-700">/month</span>
        </p>
      </div>

      <ul class="mt-6 space-y-2 text-sm">
        {
          features.map(item => {
            return  <li class="flex items-center gap-1">
            <i class="fa-solid fa-check text-indigo-700 pr-1"></i>
  
            <span class="text-gray-700"> {item} </span>
          </li>
          })
        }
       

        {/* <li class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 text-indigo-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span class="text-gray-700"> 5GB of storage </span>
        </li>

        <li class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 text-indigo-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span class="text-gray-700"> Email support </span>
        </li>

        <li class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 text-indigo-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span class="text-gray-700"> Help center access </span>
        </li>

        <li class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 text-indigo-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span class="text-gray-700"> Phone support </span>
        </li>

        <li class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 text-indigo-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span class="text-gray-700"> Community access </span>
        </li> */}
      </ul>

      <button
        type="button"
        class="mt-8 w-full block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500 active:scale-90 transition-all"
      >
        {" "}
        Get Started{" "}
      </button>
    </div>
  );
};

export default PriceCard;
