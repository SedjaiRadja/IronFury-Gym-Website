import registration from "../assets/registration.jpg";
import { courses } from "../data/courses.js";
function Registration() {
  return (
    <div className="min-h-[40vh] bg-[#0a0a0a] text-white flex">
      {/* LEFT IMAGE */}
      <div className="hidden md:block md:w-1/2 h-[85vh] relative">
        <img src={registration} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* HEADER (فوق) */}
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-[2px] bg-red-500"></div>
            <h1 className="text-xl sm:text-3xl font-bold">
              This Is The Registration Page
            </h1>
          </div>
        </div>

        {/* FORM*/}
        <div className=" flex items-center justify-center px-6 pt-0">
          <div className="bg-[#0a0a0a] text-white p-10 flex justify-center">
            <form className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-lg flex flex-col gap-4">
              {/* First + Last Name */}
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-3 rounded-lg bg-transparent border border-gray-600 
                       focus:outline-none focus:border-white 
                       transition duration-300 hover:scale-105"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-3 rounded-lg bg-transparent border border-gray-600 
                       focus:outline-none focus:border-white 
                       transition duration-300 hover:scale-105"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg bg-transparent border border-gray-600 
                     focus:outline-none focus:border-white 
                     transition duration-300 hover:scale-105"
              />

              {/* Phone Number */}
              <input
                placeholder="Date of Birth"
                className="p-3 rounded-lg bg-transparent border border-gray-600 
                     focus:outline-none focus:border-white 
                     transition duration-300 hover:scale-105"
              />
              <input
                placeholder="Phone Number"
                className="p-3 rounded-lg bg-transparent border border-gray-600 
                     focus:outline-none focus:border-white 
                     transition duration-300 hover:scale-105"
              />
              <select className=" p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 hover:scale-105">
                <option className="text-white">Select your gender</option>
                <option className="text-black">Male</option>
                <option className="text-black">Female</option>
              </select>

              <select className=" p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 hover:scale-105">
                <option className="text-white">Select a course</option>
                {courses.map((course, index) => (
                  <option className="text-black" key={index}>
                    {course.name}
                  </option>
                ))}
              </select>
              <select className=" p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 hover:scale-105">
                <option className="text-white">Select your Coach</option>
                <option className="text-black">Jesse James West</option>
                <option className="text-black">Will Tennyson</option>
                <option className="text-black">Stan Browney</option>
              </select>
              {/* Button */}
              <button
                type="submit"
                className="bg-white text-black py-3 rounded-lg font-semibold 
                     hover:bg-gray-200 hover:scale-105 
                     transition duration-300"
              >
                Join Now 💪
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registration;
