import { courses } from "../data/courses.js";
function Courses() {
  return (
    <div className="p-5 bg-[#0a0a0a] text-white pb-25">
      <div className="flex ml-15 items-center gap-2 mb-5">
        <div className="w-10 h-[2px] bg-red-500 mt-0"></div>
        <h1 className="text-white text-xl sm:text-3xl font-bold">
          Our Courses
        </h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((cour, id) => {
          return (
            <div
              key={id}
              className="bg-[#111] p-4 rounded-xl shadow-md text-center hover:shadow-[0_0_20px_#f87171] transition duration-300"
            >
              <img
                src={cour.icon}
                alt={cour.name}
                className="h-40 w-40 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="text-2xl font-semibold">{cour.name}</h3>

              <p className="text-xl text-gray-400 mt-2">{cour.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Courses;
