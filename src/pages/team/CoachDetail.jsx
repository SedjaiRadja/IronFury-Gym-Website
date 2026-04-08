import { team, teamDetail } from "../../data/team.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function CoachDetails() {
  const { id } = useParams(); // destructuring
  const coach = team.find((c) => c.id === Number(id));
  const coachDetail = teamDetail.find((d) => d.id === Number(id));

  if (!coach || !coachDetail) {
    return <p className="">Coach not found!</p>;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3 bg-[#0a0a0a] p-5">
      <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-xl font-bold text-red-700">
          Name: <span className="text-white">{coach.name}</span>
        </h1>

        <img
          src={coach.image}
          alt={coach.name}
          className="h-40 w-40 mt-4 rounded-full object-cover mb-4"
        />

        <p className="text-gray-400 w-full text-center lg:text-left">
          {coach.bio}
        </p>
      </div>

      <div className="col-span-2 flex flex-col gap-2">
        <p className="text-white">
          <span className="text-red-700">Date of Birth : </span>
          {coachDetail.dateOfBirth}
        </p>
        <p className="text-white">
          <span className="text-red-700">Birth Place : </span>
          {coachDetail.birthplace}
        </p>
        <p className="text-white">
          <span className="text-red-700">Age :</span> {coachDetail.age}
        </p>
        <p className="text-white">
          <span className="text-red-700">Nationality :</span>
          {coachDetail.nationality}
        </p>
        <h2 className="mt-4 font-semibold text-red-700">
          Early Life & Fitness Beginnings
        </h2>
        <p className="text-white">{coachDetail.earlyLife}</p>
        <h2 className="mt-4 font-semibold text-red-700">Career Highlights</h2>
        <p className="text-white">{coachDetail.careerHighlights}</p>
        <h3 className="mt-4 font-semibold text-red-700">
          Competitions / Fitness Achievements
        </h3>
        <p className="text-white">{coachDetail.competitionRecord}</p>
        <h3 className="mt-4 font-semibold text-red-700">Other Notes</h3>
        <p className="text-white">{coachDetail.otherNotes}</p>
        <Link to={"/team"}>
          <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600 transition ">
            go back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CoachDetails;
