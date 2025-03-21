import React from "react";

function Empty() {
  return (
    <div className="flex w-full items-center justify-center h-full">
      <p className="w-full max-h-screen text-center text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
        <span className="text-4xl">👋</span>
        You are not allowed to see the Events!
        <span className="block text-red-500 dark:text-red-400 mt-2">
          You need to log in to see all events.
        </span>
      </p>
    </div>
  );
}

export default Empty;
