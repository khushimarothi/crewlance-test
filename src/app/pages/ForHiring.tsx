/* eslint-disable react/no-unescaped-entities */
import SearchBox from "../components/SearchBox";

const ForHiring = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 hiring"
      style={{ height: "calc(100% - 88px)" }}
    >
      <h4 className="text-lg font-semibold text-center">
        Connect with the world's best Independents
      </h4>
      <h1 className="text-5xl text-center">What do you need help with?</h1>
      <SearchBox />

      {/* --------------------------------- or line -------------------------------- */}
      <div className="w-4/5 lg:w-1/2">
        <p className="relative text-center text-xl before:bg-gray-400 after:bg-gray-400 before:absolute after:absolute before:content-[' '] after:content-[' '] before:bottom-2 after:bottom-2 before:w-2/5 after:w-2/5 before:h-px after:h-px after:right-0 before:left-0">
          or
        </p>
      </div>
      
      <div className="w-4/5 text-lg text-center h2">
        Let Us Find the perfect person or team for your projects
      </div>
      <button
        type="button"
        className="text-white bg-primary-col hover:bg-primary-col-deep focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Hire on CrewLance
      </button>
    </div>
  );
}

export default ForHiring