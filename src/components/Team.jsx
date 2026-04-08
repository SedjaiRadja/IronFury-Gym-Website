import { team } from "../data/team.js";
import { Link } from "react-router-dom";
function Team({ showButton = false }) {
  return (
    <div className="p-5 text-white bg-[#0a0a0a]">
      <div className="flex ml-15 items-center gap-2 mb-5">
        <div className="w-10 h-[2px] bg-red-500 mt-0"></div>
        <h1 className="text-white text-xl sm:text-3xl font-bold">Our Team</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {team.map((member, index) => {
          return (
            <div
              key={index}
              className="bg-[#111] p-4 rounded-xl shadow-md text-center hover:shadow-[0_0_20px_#f87171] transition duration-300"
            >
              <div className="flex justify-center items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-40 w-40 mx-auto rounded-full object-cover mb-4"
                />
              </div>

              <h3 className="text-2xl font-semibold">{member.name}</h3>

              <p className="text-xl text-gray-400 mt-2 w-full">{member.bio}</p>
              {showButton && (
                <Link to={`/team/${member.id}`}>
                  <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                    View Profile
                  </button>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Team;
