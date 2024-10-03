import React from "react";

const FeaturedCategories = () => {
  return (
    <div className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8 text-white min-h-screen grid place-items-center">
      <div className="text-center text-5xl">Featured Categories</div>
      <div class="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
        {["Analytics", "Automation", "Risk Analysis"].map((item) => {
          return (
            <div class="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="AirMax Pro"
                class="z-0 h-full w-full rounded-md object-cover"
              />
              <div class="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-left">
                <h1 class="text-lg font-semibold text-white">{item}</h1>
                {/* <p class="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, debitis?
                  </p>
                  <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    Shop Now →
                  </button> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedCategories;
