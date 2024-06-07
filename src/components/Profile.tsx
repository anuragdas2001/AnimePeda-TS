import React from "react";

export const Profile: React.FC = () => {
  return (
    <div className="relative covered-by-your-grace-regular  flex flex-col lg:flex-row justify-between mx-10 mt-10 space-y-10 lg:space-y-0 lg:space-x-10">
      <div className="shadow-2xl shadow-purple-700 rounded-badge h-auto w-full lg:w-1/2 p-5">
        <div className="p-5 rounded-md">
          <h1 className="text-center text-2xl font-bold mb-4">
            Profile Update
          </h1>
          <div id="profile-pic" className="h-40 w-40 mx-auto mb-4">
            <img
              src="/public/onepiece.png"
              className="h-full w-full object-cover rounded-full shadow-xl shadow-indigo-600"
              alt="Profile"
            />
          </div>
          <div className="border-2 border-emerald-400 shadow-2xl hover:shadow-cyan-500 rounded-full h-12 w-40 mx-auto mb-4 flex items-center justify-center">
            <button className="text-sm p-3">Upload New Photo</button>
          </div>
          <h1 className="text-center text-xl ">Anime maniac since 2020</h1>
        </div>
      </div>

      <div
        id="info"
        className="w-full lg:w-1/3 p-5 shadow-2xl shadow-yellow-500 rounded-md"
      >
        <form action="" className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-10 text-white shadow-2xl shadow-indigo-500 font-bold py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
