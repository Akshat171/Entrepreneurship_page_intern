import React from "react";
import Banner from "./assets/banner.jpg";
const DashBoard = () => {
  return (
    <section class="_homepage block px-4 py-8 md:flex items-center justify-center">
      <div class="md:w-1/2">
        <div class="heading lg:text-7xl font-bold mb-10 sm:text-6xl font-poppins">
          Learn,
          <span className="bg-gradient-to-r from-green-900 to-green-600 bg-clip-text text-transparent underline">
            Teach
          </span>
          ,Earn
        </div>

        <div class="refer_row mb-8 text-left">
          <div class="rf_col">
            <h4 class="text-3xl font-bold mb-5 font-poppins">
              ITIE Program revolutionizes internships.
            </h4>
            <p class="mb-4 font-semibold text-xl  text-gray-400 font-poppins">
              We aim to empower learners to share their expertise and earn
              simultaneously.
            </p>
            <form
              action=""
              className="rounded-lg p-3 bg-white shadow-md inline-block mt-5"
            >
              <input
                type="email"
                class=" rounded-lg py-2 px-4 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
                name="Email"
                placeholder="Enter Email"
                required=""
              />
              <button
                type="submit"
                class="lg:text-center ml-10 bg-gradient-to-br from-green-600 to-green-900 border-none rounded-lg px-12 py-2 text-white text-base transform transition-transform duration-500 hover:scale-105 "
              >
                BECOME A TRAINER
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="md:w-1/2">
        <img
          src={Banner}
          style={{ mixBlendMode: "darken" }}
          alt=""
          class="btn w-100 h-100 md:h-300 md:w-300"
        />
      </div>
    </section>
  );
};

export default DashBoard;
